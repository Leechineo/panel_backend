import { IAppModel } from '../../../../core/domain/adapters/app_model.adapter';
import { DataRequestArgs } from '../../../../core/domain/types/data_request.types';
import { PaginatedResultOutput } from '../../../../core/domain/types/pagination.types';
import { ICreateProductDTO } from '../../domain/dtos/create_product.dto';
import { IUpdateProductDTO } from '../../domain/dtos/update_product.dto';
import { IProductEntity } from '../../domain/entities/product.entity';
import { IProductMapper } from '../../domain/mappers/product.mapper';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { ProductNotFoundError } from '../errors/product_not_found.error';

export class ProductRepository implements IProductRepository {
  constructor(
    private productModel: IAppModel<IProductEntity>,
    private productMapper: IProductMapper,
  ) {}

  async createProduct(
    createProductDTO: ICreateProductDTO,
  ): Promise<IProductEntity> {
    const lastProduct: IProductEntity = this.productMapper.fromJsonDataToEntity(
      (
        await this.productModel.findPaginated(
          {
            limit: 1,
            page: 1,
          },
          {},
          {
            sort: {
              id: 'desc',
            },
          },
        )
      ).items[0],
    );
    const createdProduct = await this.productModel.create({
      id: lastProduct.id + 1,
      ...createProductDTO,
      createdAt: new Date(),
    });
    return createdProduct;
  }

  async getProducts(
    args: DataRequestArgs,
  ): Promise<PaginatedResultOutput<IProductEntity>> {
    const paginatedProducts = await this.productModel.findPaginated(
      {
        limit: args.pagination.limit,
        page: args.pagination.page,
      },
      {
        $or: [
          {
            name: {
              $includesString: args.searchQuery,
            },
            description: {
              $includesString: args.searchQuery,
            },
          },
        ],
      },
    );
    return {
      total: paginatedProducts.total,
      items: paginatedProducts.items.map((item) =>
        this.productMapper.fromJsonDataToEntity(item),
      ),
    };
  }

  async getProductById(productId: number): Promise<IProductEntity> {
    const product = await this.productModel.findById(productId);
    if (product) {
      return this.productMapper.fromJsonDataToEntity(product);
    }
    throw new ProductNotFoundError();
  }
  async updateProduct(
    updateProductDTO: IUpdateProductDTO,
  ): Promise<IProductEntity> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      updateProductDTO.id,
      updateProductDTO,
    );
    if (updatedProduct) {
      return this.productMapper.fromJsonDataToEntity(updatedProduct);
    }
    throw new ProductNotFoundError();
  }
  async deleteProduct(productId: number): Promise<IProductEntity> {
    const deletedProduct = await this.productModel.findByIdAndDelete(productId);
    if (deletedProduct) {
      return this.productMapper.fromJsonDataToEntity(deletedProduct);
    }
    throw new ProductNotFoundError();
  }
}
