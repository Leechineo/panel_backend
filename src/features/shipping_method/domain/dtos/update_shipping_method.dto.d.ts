import {
  ShippingMethodMapping,
  ShippingMethodProduct,
} from '../entities/shipping_method.entity';

export interface IUpdateShippingShippingMethodDTO {
  id: string;
  name?: string;
  mappings?: ShippingMethodMapping[];
  defaultMapping?: ShippingMethodMapping;
  products?: ShippingMethodProduct[];
}
