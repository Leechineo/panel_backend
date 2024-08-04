import { DataRequestArgs } from '../../../../core/domain/types/data_request.types';
import { PaginatedResultOutput } from '../../../../core/domain/types/pagination.types';
import { IProductEntity } from '../../domain/entities/product.entity';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { IGetProductsUseCase } from '../../domain/usecases/get_products.usecase';

export class GetProductsUseCase implements IGetProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async exec(
    args: DataRequestArgs,
  ): Promise<PaginatedResultOutput<IProductEntity>> {
    const paginatedProducts = await this.productRepository.getProducts(args);
    return paginatedProducts;
  }
}
