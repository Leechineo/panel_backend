import { IStockEntity } from '../../../../core/domain/entities/stock.entity';

export interface IUpdateStockUseCase {
  exec(stock: Partial<IStockEntity>): Promise<IStockEntity>;
}
