/* eslint-disable @typescript-eslint/no-explicit-any */
import { IShippingMethodDTO } from '../../domain/dtos/shipping_method.dto';
import { IShippingMethodEntity } from '../../domain/entities/shipping_method.entity';
import { IShippingMethodMapper } from '../../domain/mappers/shipping_method.mapper';

export class ShippingMethodMapper implements IShippingMethodMapper {
  fromJsonDataToDTO(jsonData: Record<string, any>): IShippingMethodDTO {
    return {
      id: jsonData['id'],
      name: jsonData['name'],
      defaultMapping: jsonData['defaultMapping'],
      mappings: jsonData['mappings'] ?? [],
      products: jsonData['products'] ?? [],
      createdAt: jsonData['createdAt'] ?? new Date().toISOString(),
    };
  }
  fromEntityToDTO(entity: IShippingMethodEntity): IShippingMethodDTO {
    return {
      id: entity.id,
      defaultMapping: entity.defaultMapping,
      mappings: entity.mappings,
      name: entity.name,
      products: entity.products,
      createdAt: entity.createdAt.toISOString(),
    };
  }
  fromJsonDataToEntity(jsonData: Record<string, any>): IShippingMethodEntity {
    return {
      id: jsonData['id'],
      name: jsonData['name'],
      defaultMapping: jsonData['defaultMapping'],
      mappings: jsonData['mappings'] ?? [],
      products: jsonData['products'] ?? [],
      createdAt: new Date(jsonData['createdAt']),
    };
  }
  fromDTOToEntity(dto: IShippingMethodDTO): IShippingMethodEntity {
    return {
      id: dto.id,
      defaultMapping: dto.defaultMapping,
      mappings: dto.mappings,
      name: dto.name,
      products: dto.products,
      createdAt: new Date(dto.createdAt),
    };
  }
}
