import { HttpAdapter } from '../../../core/adapters/http.adapter';
import { RouterAdapter } from '../../../core/adapters/router.adapter';
import { authMiddleware } from '../../../core/presenter/middlewares/auth.middleware';
import AddressModel from '../../../core/presenter/models/address.model';
import { ZipcodeSearcherDataSource } from '../data/datasources/zipcode_searcher.datasource';
import { AddressMapper } from '../data/mapper/address.mapper';
import { AddressRepository } from '../data/repository/address.repository';
import { FindAddressFromZipcodeUseCase } from '../data/usecases/find_address_from_zipcode.usecase';
import { FindUserAddressesUseCase } from '../data/usecases/find_user_addresses.usecase';
import { GetAddressByZipcodeController } from './controllers/get_address_by_zipcode.controller';
import { GetUserAddressesController } from './controllers/get_user_addresses.controller';

const addressRoutes = new RouterAdapter();
const httpAdapter = new HttpAdapter();

const zipcodeSearcherDataSource = new ZipcodeSearcherDataSource(httpAdapter);
const addressMapper = new AddressMapper();
const addressRepository = new AddressRepository(
  AddressModel,
  addressMapper,
  zipcodeSearcherDataSource,
);

addressRoutes.get('/user/:id', authMiddleware(), async (req, res) => {
  const findUserAddressesUseCase = new FindUserAddressesUseCase(
    addressRepository,
  );
  const getUserAddressesController = new GetUserAddressesController(
    findUserAddressesUseCase,
  );
  getUserAddressesController.handleRequest(req, res);
});

addressRoutes.get('/zipcode/:zipcode', async (req, res) => {
  const findAddressFromZipcodeUseCase = new FindAddressFromZipcodeUseCase(
    addressRepository,
  );
  const getAddressByZipcodeController = new GetAddressByZipcodeController(
    findAddressFromZipcodeUseCase,
  );
  getAddressByZipcodeController.handleRequest(req, res);
});

export default addressRoutes;
