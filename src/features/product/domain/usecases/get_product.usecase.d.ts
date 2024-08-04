import { IProductEntity } from '../entities/product.entity';

export interface IGetProductUseCase {
  exec(args: { productId: number }): Promise<IProductEntity>;
}
