import { IStockEntity } from '../../domain/entities/stock.entity';
import { IStockRepository } from '../../domain/repositories/stock.repository';
import { IGetStocksUseCase } from '../../domain/usecases/get_stocks.usecase';

export class GetStocksUseCase implements IGetStocksUseCase {
  constructor(private repository: IStockRepository) {}
  async exec(): Promise<IStockEntity[]> {
    const stocks = await this.repository.getAllStocks();
    return stocks;
  }
}
