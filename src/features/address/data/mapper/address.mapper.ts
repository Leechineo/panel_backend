/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAddressDTO } from '../../domain/dtos/address.dto';
import { IAddressEntity } from '../../domain/entities/address.entity';
import { IAddressMapper } from '../../domain/mappers/address.mapper';

export class AddressMapper implements IAddressMapper {
  fromJsonDataToDTO(jsonData: Record<string, any>): IAddressDTO {
    return {
      id: jsonData.id,
      user: jsonData.user,
      zipcode: jsonData.zipcode,
      name: jsonData.name,
      city: jsonData.city,
      state: jsonData.state,
      district: jsonData.district,
      street: jsonData.street,
      number: jsonData.number,
      complement: jsonData.complement,
      reference: jsonData.reference,
      phone: jsonData.phone,
      createdAt: jsonData.createdAt,
    };
  }
  fromEntityToDTO(entity: IAddressEntity): IAddressDTO {
    return {
      id: entity.id,
      user: entity.user,
      zipcode: entity.zipcode,
      name: entity.name,
      city: entity.city,
      state: entity.state,
      district: entity.district,
      street: entity.street,
      number: entity.number,
      complement: entity.complement,
      reference: entity.reference,
      phone: entity.phone,
      createdAt: entity.createdAt.toISOString(),
    };
  }
  fromJsonDataToEntity(jsonData: Record<string, any>): IAddressEntity {
    return {
      id: jsonData.id,
      user: jsonData.user,
      zipcode: jsonData.zipcode,
      name: jsonData.name,
      city: jsonData.city,
      state: jsonData.state,
      district: jsonData.district,
      street: jsonData.street,
      number: jsonData.number,
      complement: jsonData.complement,
      reference: jsonData.reference,
      phone: jsonData.phone,
      createdAt: new Date(jsonData.createdAt),
    };
  }
  fromDTOToEntity(dto: IAddressDTO): IAddressEntity {
    return {
      id: dto.id,
      user: dto.user,
      zipcode: dto.zipcode,
      name: dto.name,
      city: dto.city,
      state: dto.state,
      district: dto.district,
      street: dto.street,
      number: dto.number,
      complement: dto.complement,
      reference: dto.reference,
      phone: dto.phone,
      createdAt: new Date(dto.createdAt),
    };
  }
}
