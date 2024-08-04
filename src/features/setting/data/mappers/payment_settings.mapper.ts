/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPaymentSettingsDTO } from '../../domain/dto/payment_settings.dto';
import { IPaymentSettingsEntity } from '../../domain/entities/payment_settings.entity';
import { IPaymentSettingsMapper } from '../../domain/mappers/payment_settings.mapper';

export class PaymentSettingsMapper implements IPaymentSettingsMapper {
  fromJsonDataToDTO(jsonData: Record<string, any>): IPaymentSettingsDTO {
    return {
      id: jsonData.id as string,
      name: jsonData.name as string,
      value: JSON.parse(jsonData.value as string),
      createdAt: jsonData.createdAt as string,
    };
  }
  fromEntityToDTO(entity: IPaymentSettingsEntity): IPaymentSettingsDTO {
    return {
      id: entity.id,
      name: entity.name,
      value: entity.value,
      createdAt: entity.createdAt.toISOString(),
    };
  }
  fromJsonDataToEntity(jsonData: Record<string, any>): IPaymentSettingsEntity {
    return {
      id: jsonData.id as string,
      name: jsonData.name as string,
      value: JSON.parse(jsonData.value as string),
      createdAt: new Date(jsonData.createdAt as string),
    };
  }
  fromDTOToEntity(dto: IPaymentSettingsDTO): IPaymentSettingsEntity {
    return {
      id: dto.id,
      name: dto.name,
      value: dto.value,
      createdAt: new Date(dto.createdAt),
    };
  }
}
