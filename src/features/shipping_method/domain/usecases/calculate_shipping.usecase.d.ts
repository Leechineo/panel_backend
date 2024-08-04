import { ShippingMethodMapping } from '../entities/shipping_method.entity';

export interface ICalculateShippingUseCase {
  exec(args: {
    addressId: string;
    shippingMethodId: string;
    productId?: number;
  }): Promise<ShippingMethodMapping | null>;
}
