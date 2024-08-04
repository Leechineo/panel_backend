import { IShippingMethodDTO } from '../dtos/shipping_method.dto';

export interface IGetShippingMethodByIdUseCase {
  exec(shippingMethodId: string): Promise<IShippingMethodDTO>;
}
