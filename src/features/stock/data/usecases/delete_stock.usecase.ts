import { IStockEntity } from '../../domain/entities/stock.entity';
import { IStockRepository } from '../../domain/repositories/stock.repository';
import { IDeleteStockUseCase } from '../../domain/usecases/delete_stock.usecase';

export class DeleteStockUseCase implements IDeleteStockUseCase {
  constructor(private repository: IStockRepository) {}
  async exec(stockId: `stock-${string}`): Promise<IStockEntity> {
    const stockDeleted = await this.repository.deleteStock(stockId);
    return stockDeleted;
  }
}
