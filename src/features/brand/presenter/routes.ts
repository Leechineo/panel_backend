import { RouterAdapter } from '../../../core/adapters/router.adapter';
import { authMiddleware } from '../../../core/presenter/middlewares/auth.middleware';
import { BrandMapper } from '../data/mappers/brand.mapper';
import { BrandRepository } from '../data/repositories/brand.repository';
import { CreateBrandUseCase } from '../data/usecases/create_brand.usecase';
import { DeleteBrandUseCase } from '../data/usecases/delete_brand.usecase';
import { GetAllBrandsUseCase } from '../data/usecases/get_all_brands.usecase';
import { GetBrandUseCase } from '../data/usecases/get_brand.usecase';
import { UpdateBrandUseCase } from '../data/usecases/update_brand.usecase';
import { CreateBrandController } from './controllers/create_brand.controller';
import { DeleteBrandController } from './controllers/delete_brand.controller';
import { GetAllBrandsController } from './controllers/get_all_brands.controller';
import { GetBrandController } from './controllers/get_brand.controller';
import { UpdateBrandController } from './controllers/update_brand.controller';
import BrandModel from './models/brand.model';

const brandRoutes = new RouterAdapter();

const brandMapper = new BrandMapper();
const brandRepository = new BrandRepository(BrandModel, brandMapper);

// Get all brands
brandRoutes.get('/', authMiddleware(), (req, res) => {
  const getAllBrandsUseCase = new GetAllBrandsUseCase(brandRepository);
  const getBrandsController = new GetAllBrandsController(getAllBrandsUseCase);
  return getBrandsController.handleRequest(req, res);
});

// Get an existing brand by id
brandRoutes.get('/:id', authMiddleware(), (req, res) => {
  const getBrandUseCase = new GetBrandUseCase(brandRepository);
  const getBrandController = new GetBrandController(getBrandUseCase);
  return getBrandController.handleRequest(req, res);
});

// Create a new brand
brandRoutes.post('/', authMiddleware(), (req, res) => {
  const createBrandUseCase = new CreateBrandUseCase(brandRepository);
  const createBrandController = new CreateBrandController(createBrandUseCase);
  return createBrandController.handleRequest(req, res);
});

// Update an existing brand by id
brandRoutes.patch('/:id', authMiddleware(), (req, res) => {
  const updateBrandUseCase = new UpdateBrandUseCase(brandRepository);
  const updateBrandController = new UpdateBrandController(updateBrandUseCase);
  return updateBrandController.handleRequest(req, res);
});

// Delete an existing brand by id
brandRoutes.delete('/:id', authMiddleware(), (req, res) => {
  const deleteBrandUseCase = new DeleteBrandUseCase(brandRepository);
  const deleteBrandController = new DeleteBrandController(deleteBrandUseCase);
  return deleteBrandController.handleRequest(req, res);
});

export default brandRoutes;
