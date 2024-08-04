import { IStockEntity } from '../../domain/entities/stock.entity';
import { IStockRepository } from '../../domain/repositories/stock.repository';
import { IUpdateStockUseCase } from '../../domain/usecases/update_stock.usecase';

export class UpdateStockUseCase implements IUpdateStockUseCase {
  constructor(private repository: IStockRepository) {}
  async exec(stock: Partial<IStockEntity>): Promise<IStockEntity> {
    const updatedStock = await this.repository.updateStock(stock);
    return updatedStock;
  }
}
