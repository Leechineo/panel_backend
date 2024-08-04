import { DataRequestArgs } from '../../../../core/domain/types/data_request.types';
import { PaginatedResultOutput } from '../../../../core/domain/types/pagination.types';
import { IProductEntity } from '../entities/product.entity';

export interface IGetProductsUseCase {
  exec(args: DataRequestArgs): Promise<PaginatedResultOutput<IProductEntity>>;
}
