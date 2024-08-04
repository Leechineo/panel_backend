import {
  ShippingMethodMapping,
  ShippingMethodProduct,
} from '../entities/shipping_method.entity';

export interface ICreateShippingMethodDTO {
  name: string;
  mappings?: ShippingMethodMapping[];
  defaultMapping: ShippingMethodMapping;
  products?: ShippingMethodProduct[];
}
