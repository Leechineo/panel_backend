import { HttpAdapter } from '../../../core/adapters/http.adapter';
import { RouterAdapter } from '../../../core/adapters/router.adapter';
import { authMiddleware } from '../../../core/presenter/middlewares/auth.middleware';
import AddressModel from '../../../core/presenter/models/address.model';
import { ZipcodeSearcherDataSource } from '../../address/data/datasources/zipcode_searcher.datasource';
import { AddressMapper } from '../../address/data/mapper/address.mapper';
import { AddressRepository } from '../../address/data/repository/address.repository';
import { ShippingMethodMapper } from '../data/mappers/shipping_method.mapper';
import { ShippingMethodRepository } from '../data/repostories/shipping_method.repository';
import { CalculateShippingUseCase } from '../data/usecases/calculate_shipping.usecase';
import { CreateShippingMethodUseCase } from '../data/usecases/create_shipping_method.usecase';
import { DeleteShippingMethodUseCase } from '../data/usecases/delete_shipping_method.usecase';
import { FindMappingUseCase } from '../data/usecases/find_mapping.usecase';
import { FindRegionUseCase } from '../data/usecases/find_region.usecase';
import { GetAllShippingMethodsUseCase } from '../data/usecases/get_all_shipping_methods.usecase';
import { GetShippingMethodByIdUseCase } from '../data/usecases/get_shipping_method_by_id.usecase';
import { UpdateShippingMethodUseCase } from '../data/usecases/update_shipping_method.usecase';
import { CalculateShippingController } from './controllers/calculate_shipping.controller';
import { CreateShippingMethodController } from './controllers/create_shipping_method.controller';
import { DeleteShippingMethodController } from './controllers/delete_shipping_method.controller';
import { GetAllShippingMethodsController } from './controllers/get_all_shipping_methods.controller';
import { GetShippingMethodByIdController } from './controllers/get_shipping_method_by_id.controller';
import { UpdateShippingMethodController } from './controllers/update_shipping_method.controller';
import ShippingMethodModel from './models/shipping_method.model';

const shippingMethodRoutes = new RouterAdapter();
const httpAdapter = new HttpAdapter();

const zipcodeSearcherDataSource = new ZipcodeSearcherDataSource(httpAdapter);

const shippingMethodMapper = new ShippingMethodMapper();
const addressMapper = new AddressMapper();

const shippingMethodRepository = new ShippingMethodRepository(
  ShippingMethodModel,
  shippingMethodMapper,
);
const addressRepository = new AddressRepository(
  AddressModel,
  addressMapper,
  zipcodeSearcherDataSource,
);

// Get All Shipping Methods
shippingMethodRoutes.get('/', authMiddleware(), (req, res) => {
  const getAllShippingMethodsUseCase = new GetAllShippingMethodsUseCase(
    shippingMethodRepository,
  );
  const getAllShippingMethodsController = new GetAllShippingMethodsController(
    getAllShippingMethodsUseCase,
  );
  return getAllShippingMethodsController.handleRequest(req, res);
});

// Get shipping method by id
shippingMethodRoutes.get('/s/:id', authMiddleware(), (req, res) => {
  const getShippingMethodByIdUseCase = new GetShippingMethodByIdUseCase(
    shippingMethodRepository,
  );
  const getShippingMethodByIdController = new GetShippingMethodByIdController(
    getShippingMethodByIdUseCase,
  );
  getShippingMethodByIdController.handleRequest(req, res);
});

// Create a new shipping method
shippingMethodRoutes.post('/', authMiddleware(), (req, res) => {
  const createShippingMethodUseCase = new CreateShippingMethodUseCase(
    shippingMethodRepository,
  );
  const createShippingMethodController = new CreateShippingMethodController(
    createShippingMethodUseCase,
  );
  return createShippingMethodController.handleRequest(req, res);
});

// Update an existing shipping method
shippingMethodRoutes.patch('/s/:id', authMiddleware(), (req, res) => {
  const updateShippingMethodUseCase = new UpdateShippingMethodUseCase(
    shippingMethodRepository,
  );
  const updateShippingMethodController = new UpdateShippingMethodController(
    updateShippingMethodUseCase,
  );
  return updateShippingMethodController.handleRequest(req, res);
});

// Delete an existing shipping method
shippingMethodRoutes.delete('/s/:id', (req, res) => {
  const deleteShippingMethodUseCase = new DeleteShippingMethodUseCase(
    shippingMethodRepository,
  );
  const deleteShippingMethodController = new DeleteShippingMethodController(
    deleteShippingMethodUseCase,
  );
  return deleteShippingMethodController.handleRequest(req, res);
});

// Calculate shipping
shippingMethodRoutes.get('/calculate_shipping', (req, res) => {
  const findRegionUseCase = new FindRegionUseCase();
  const findMappingUseCase = new FindMappingUseCase({
    findRegionUseCase,
  });
  const calculateShippingUseCase = new CalculateShippingUseCase({
    addressRepository,
    findMappingUseCase,
    shippingMethodRepository,
  });
  const calculateShippingController = new CalculateShippingController({
    calculateShippingUseCase,
  });
  return calculateShippingController.handleRequest(req, res);
});

export default shippingMethodRoutes;
