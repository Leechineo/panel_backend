import { IStockEntity } from '../../../../core/domain/entities/stock.entity';

export interface IDeleteStockUseCase {
  exec(stockId: `stock-${string}`): Promise<IStockEntity>;
}
