import { IAppMapper } from '../../../../core/domain/mappers/app_mapper';
import { IShippingMethodDTO } from '../dtos/shipping_method.dto';
import { IShippingMethodEntity } from '../entities/shipping_method.entity';

export interface IShippingMethodMapper
  extends IAppMapper<IShippingMethodDTO, IShippingMethodEntity> {}
