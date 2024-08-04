/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBrandDTO } from '../../domain/dtos/brand.dto';
import { IBrandEntity } from '../../domain/entities/brand.entity';
import { IBrandMapper } from '../../domain/mappers/brand.mapper';

export class BrandMapper implements IBrandMapper {
  fromJsonDataToDTO(jsonData: Record<string, any>): IBrandDTO {
    return {
      id: jsonData['id'],
      name: jsonData['name'],
      color: jsonData['color'],
      icon: jsonData['icon'],
      brandWebsite: jsonData['brandWebsite'],
      createdAt: jsonData['createdAt'],
    };
  }
  fromEntityToDTO(entity: IBrandEntity): IBrandDTO {
    return {
      id: entity.id,
      name: entity.name,
      color: entity.color,
      icon: entity.icon,
      brandWebsite: entity.brandWebsite,
      createdAt: entity.createdAt.toISOString(),
    };
  }
  fromJsonDataToEntity(jsonData: Record<string, any>): IBrandEntity {
    return {
      id: jsonData['id'],
      name: jsonData['name'],
      color: jsonData['color'],
      icon: jsonData['icon'],
      brandWebsite: jsonData['brandWebsite'],
      createdAt: new Date(jsonData['createdAt']),
    };
  }
  fromDTOToEntity(dto: IBrandDTO): IBrandEntity {
    return {
      id: dto.id,
      name: dto.name,
      color: dto.color,
      icon: dto.icon,
      brandWebsite: dto.brandWebsite,
      createdAt: new Date(dto.createdAt),
    };
  }
}
