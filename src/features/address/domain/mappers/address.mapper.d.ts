import { IAppMapper } from '../../../../core/domain/mappers/app_mapper';
import { IAddressDTO } from '../dtos/address.dto';
import { IAddressEntity } from '../entities/address.entity';

export interface IAddressMapper
  extends IAppMapper<IAddressDTO, IAddressEntity> {}
