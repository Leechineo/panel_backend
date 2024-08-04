/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISettingDTO } from '../../domain/dto/setting.dto';
import { ISettingEntity } from '../../domain/entities/setting.entity';
import { ISettingMapper } from '../../domain/mappers/setting.mapper';

export class SettingMapper implements ISettingMapper {
  fromJsonDataToDTO(jsonData: Record<string, any>): ISettingDTO {
    return {
      id: jsonData.id,
      name: jsonData.name,
      value: jsonData.value,
      createdAt: jsonData.createdAt,
    };
  }
  fromEntityToDTO(entity: ISettingEntity): ISettingDTO {
    return {
      id: entity.id,
      name: entity.name,
      value: entity.value,
      createdAt: entity.createdAt.toISOString(),
    };
  }
  fromJsonDataToEntity(jsonData: Record<string, any>): ISettingEntity {
    return {
      id: jsonData.id,
      name: jsonData.name,
      value: jsonData.value,
      createdAt: new Date(jsonData.createdAt),
    };
  }
  fromDTOToEntity(dto: ISettingDTO): ISettingEntity {
    return {
      id: dto.id,
      name: dto.name,
      value: dto.value,
      createdAt: new Date(dto.createdAt),
    };
  }
}
