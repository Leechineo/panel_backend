import { IStockEntity } from '../../domain/entities/stock.entity';
import { IStockRepository } from '../../domain/repositories/stock.repository';
import { IGetStockUseCase } from '../../domain/usecases/get_stock.usecase';

export class GetStockUseCase implements IGetStockUseCase {
  constructor(private repository: IStockRepository) {}
  async exec(stockId: `stock-${string}`): Promise<IStockEntity> {
    const stock = await this.repository.getStockById(stockId);
    return stock;
  }
}
