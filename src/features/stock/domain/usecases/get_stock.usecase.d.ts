import { IStockEntity } from '../../../../core/domain/entities/stock.entity';

export interface IGetStockUseCase {
  exec(stockId: `stock-${string}`): Promise<IStockEntity>;
}
