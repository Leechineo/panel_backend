import { IProductEntity } from '../../domain/entities/product.entity';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { IGetProductUseCase } from '../../domain/usecases/get_product.usecase';

export class GetProductUseCase implements IGetProductUseCase {
  constructor(private productRepository: IProductRepository) {}
  async exec(args: { productId: number }): Promise<IProductEntity> {
    const product = await this.productRepository.getProductById(args.productId);
    return product;
  }
}
