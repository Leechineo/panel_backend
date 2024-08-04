/* eslint-disable @typescript-eslint/no-explicit-any */
import { IStockEntity } from '../../domain/entities/stock.entity';
import { IStockRepository } from '../../domain/repositories/stock.repository';
import { ICreateStockUseCase } from '../../domain/usecases/create_stock.usecase';

import crypto from 'crypto';
import { StockEntity } from '../entities/stock.entity';

export class CreateStockUseCase implements ICreateStockUseCase {
  constructor(private repository: IStockRepository) {}

  async exec(stockJson: Record<string, any>): Promise<IStockEntity> {
    const stock = StockEntity.fromJson({
      id: `stock-${crypto.randomUUID()}`,
      ...stockJson,
      createdAt: new Date(Date.now()),
    });
    const createdStock = await this.repository.createStock(stock);
    return createdStock;
  }
}
