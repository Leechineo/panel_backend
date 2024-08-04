import { IAddressEntity } from '../../../address/domain/entities/address.entity';
import { ShippingMethodMapping } from '../entities/shipping_method.entity';

export interface IFindMappingUseCase {
  exec(
    mappings: ShippingMethodMapping[],
    address: IAddressEntity,
  ): ShippingMethodMapping | null;
}
