import { IStockEntity } from '../../../../core/domain/entities/stock.entity';

export interface IGetStocksUseCase {
  exec(): Promise<IStockEntity[]>;
}
