import { RouterAdapter } from '../../../core/adapters/router.adapter';
import { authMiddleware } from '../../../core/presenter/middlewares/auth.middleware';
import { ProductMapper } from '../data/mappers/product.mapper';
import { ProductRepository } from '../data/repositories/product.repository';
import { GetProductUseCase } from '../data/usecases/get_product.usecase';
import { GetProductsUseCase } from '../data/usecases/get_products.usecase';
import { GetProductController } from './controllers/get_product.controller';
import { GetProductsController } from './controllers/get_products.controller';
import { ProductModel } from './models/product.model';

const productRoutes = new RouterAdapter();

const productMapper = new ProductMapper();
const productRepository = new ProductRepository(ProductModel, productMapper);

// Get paginated products
productRoutes.get('/', authMiddleware(), (req, res) => {
  const getProductsUseCase = new GetProductsUseCase(productRepository);
  const getProductsController = new GetProductsController(getProductsUseCase);
  return getProductsController.handleRequest(req, res);
});

// Get product by id
productRoutes.get('/:id', authMiddleware(), (req, res) => {
  const getProductUseCase = new GetProductUseCase(productRepository);
  const getProductController = new GetProductController(getProductUseCase);
  return getProductController.handleRequest(req, res);
});

export default productRoutes;
