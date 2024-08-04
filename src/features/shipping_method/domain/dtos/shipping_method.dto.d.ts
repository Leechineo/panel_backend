import {
  ShippingMethodMapping,
  ShippingMethodProduct,
} from '../entities/shipping_method.entity';

export interface IShippingMethodDTO {
  id: string;
  name: string;
  defaultMapping: ShippingMethodMapping;
  mappings: ShippingMethodMapping[];
  products: ShippingMethodProduct[];
  createdAt: string;
}
