import { IShippingMethodDTO } from '../dtos/shipping_method.dto';

export interface IDeleteShippingMethodUseCase {
  exec(shippingMethodId: string): Promise<IShippingMethodDTO>;
}
