import {
  ShippingMethodRegion,
  ShippingMethodState,
} from '../entities/shipping_method.entity';

export interface IFindRegionUseCase {
  exec(state: ShippingMethodState): ShippingMethodRegion;
}
