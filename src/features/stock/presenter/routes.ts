import { RouterAdapter } from '../../../core/adapters/router.adapter';
import { StockRepository } from '../data/repositories/stock.repository';
import { CreateStockUseCase } from '../data/usecases/create_stock.usecase';
import { DeleteStockUseCase } from '../data/usecases/delete_stock.usecase';
import { GetStockUseCase } from '../data/usecases/get_stock.usecase';
import { GetStocksUseCase } from '../data/usecases/get_stocks.usecase';
import { UpdateStockUseCase } from '../data/usecases/update_stock.usecase';
import { CreateStockController } from './controllers/create_stock.controller';
import { DeleteStockController } from './controllers/delete_stock.controller';
import { GetStockController } from './controllers/get_stock.controller';
import { GetStocksController } from './controllers/get_stocks.controller';
import { UpdateStockController } from './controllers/update_stock.controller';
import StockModel from './models/stock.model';

const stockRoutes = new RouterAdapter();

const stockRepository = new StockRepository(StockModel);

// Get all stocks
stockRoutes.get('/', async (req, res) => {
  const getStocksUseCase = new GetStocksUseCase(stockRepository);
  const getStocksController = new GetStocksController(getStocksUseCase);
  return getStocksController.handleRequest(req, res);
});

// Get an existing stock by id
stockRoutes.get('/:id', async (req, res) => {
  const getStockUseCase = new GetStockUseCase(stockRepository);
  const getStockController = new GetStockController(getStockUseCase);
  return getStockController.handleRequest(req, res);
});

// Create a new stock
stockRoutes.post('/', async (req, res) => {
  const createStockUseCase = new CreateStockUseCase(stockRepository);
  const createStockController = new CreateStockController(createStockUseCase);
  createStockController.handleRequest(req, res);
});

// Update an existing stock by id
stockRoutes.patch('/:id', async (req, res) => {
  const updateStockUseCase = new UpdateStockUseCase(stockRepository);
  const updateStockController = new UpdateStockController(updateStockUseCase);
  return updateStockController.handleRequest(req, res);
});

// Delete an existing stock by id
stockRoutes.delete('/:id', async (req, res) => {
  const deleteStockUseCase = new DeleteStockUseCase(stockRepository);
  const deleteStockController = new DeleteStockController(deleteStockUseCase);
  return deleteStockController.handleRequest(req, res);
});

export default stockRoutes;
