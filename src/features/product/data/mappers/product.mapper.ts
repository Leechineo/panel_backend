/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProductDTO } from '../../domain/dtos/product_dto';
import { IProductEntity } from '../../domain/entities/product.entity';
import { IProductMapper } from '../../domain/mappers/product.mapper';

export class ProductMapper implements IProductMapper {
  fromJsonDataToDTO(jsonData: Record<string, any>): IProductDTO {
    return {
      id: jsonData.id,
      name: jsonData.name,
      description: jsonData.description,
      images: jsonData.images,
      specifications: jsonData.specifications,
      category: jsonData.category,
      brand: jsonData.brand,
      type: jsonData.type,
      stocks: jsonData.stocks,
      private: jsonData.private,
      createdAt: jsonData.createdAt,
    };
  }
  fromEntityToDTO(entity: IProductEntity): IProductDTO {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      images: entity.images,
      specifications: entity.specifications,
      category: entity.category,
      brand: entity.brand,
      type: entity.type,
      stocks: entity.stocks,
      private: entity.private,
      createdAt: entity.createdAt.toISOString(),
    };
  }
  fromJsonDataToEntity(jsonData: Record<string, any>): IProductEntity {
    return {
      id: jsonData.id,
      name: jsonData.name,
      description: jsonData.description,
      images: jsonData.images,
      specifications: jsonData.specifications,
      category: jsonData.category,
      brand: jsonData.brand,
      type: jsonData.type,
      stocks: jsonData.stocks,
      private: jsonData.private,
      createdAt: new Date(jsonData.createdAt),
    };
  }
  fromDTOToEntity(dto: IProductDTO): IProductEntity {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      images: dto.images,
      specifications: dto.specifications,
      category: dto.category,
      brand: dto.brand,
      type: dto.type,
      stocks: dto.stocks,
      private: dto.private,
      createdAt: new Date(dto.createdAt),
    };
  }
}
