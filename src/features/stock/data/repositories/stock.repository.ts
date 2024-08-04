import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import { IAppModel } from '../../../../core/domain/adapters/app_model.adapter';
import { IStockEntity } from '../../domain/entities/stock.entity';
import { IStockRepository } from '../../domain/repositories/stock.repository';
import { StockEntity } from '../entities/stock.entity';
import { StockNotFoundError } from '../errors/stock_not_found.error';

export class StockRepository implements IStockRepository {
  constructor(private stockModel: IAppModel<IStockEntity>) {}

  async getAllStocks(): Promise<IStockEntity[]> {
    const stocks = await this.stockModel.find();
    return stocks.map((stock) => StockEntity.fromJson(stock));
  }

  async getStockById(stockId: `stock-${string}`): Promise<IStockEntity> {
    const stock = await this.stockModel.findById(stockId);
    if (stock) {
      return StockEntity.fromJson(stock);
    }
    throw new StockNotFoundError();
  }

  async deleteStock(stockId: `stock-${string}`): Promise<IStockEntity> {
    const stock = await this.stockModel.findById(stockId);
    if (stock) {
      await this.stockModel.findByIdAndDelete(stockId);
      return StockEntity.fromJson(stock);
    }
    throw new StockNotFoundError();
  }

  async updateStock(stock: Partial<IStockEntity>): Promise<IStockEntity> {
    if (!stock.id) {
      throw new InvalidRequestError();
    }
    const stockUpdated = await this.stockModel.findByIdAndUpdate(
      stock.id,
      stock,
    );
    if (stockUpdated) {
      return StockEntity.fromJson(stockUpdated);
    }
    throw new StockNotFoundError();
  }

  async createStock(stock: IStockEntity): Promise<IStockEntity> {
    await this.stockModel.create(stock);
    return stock;
  }
}
