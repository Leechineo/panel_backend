/* eslint-disable @typescript-eslint/no-explicit-any */
import { IStockEntity } from '../../../../core/domain/entities/stock.entity';

export interface ICreateStockUseCase {
  exec(stockJson: Record<string, any>): Promise<IStockEntity>;
}
