import { DataRequestArgs } from '../../../../core/domain/types/data_request.types';
import { PaginatedResultOutput } from '../../../../core/domain/types/pagination.types';
import { ICreateProductDTO } from '../dtos/create_product.dto';
import { IUpdateProductDTO } from '../dtos/update_product.dto';
import { IProductEntity } from '../entities/product.entity';

export interface IProductRepository {
  createProduct(createProductDTO: ICreateProductDTO): Promise<IProductEntity>;
  getProducts(
    args: DataRequestArgs,
  ): Promise<PaginatedResultOutput<IProductEntity>>;
  getProductById(productId: number): Promise<IProductEntity>;
  updateProduct(updateProductDTO: IUpdateProductDTO): Promise<IProductEntity>;
  deleteProduct(productId: number): Promise<IProductEntity>;
}
