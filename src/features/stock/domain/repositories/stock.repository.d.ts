import { IStockEntity } from '../../../../core/domain/entities/stock.entity';

export interface IStockRepository {
  getAllStocks(): Promise<IStockEntity[]>;
  getStockById(stockId: `stock-${string}`): Promise<IStockEntity>;
  deleteStock(stockId: `stock-${string}`): Promise<IStockEntity>;
  updateStock(stock: Partial<IStockEntity>): Promise<IStockEntity>;
  createStock(stock: IStockEntity): Promise<IStockEntity>;
}
