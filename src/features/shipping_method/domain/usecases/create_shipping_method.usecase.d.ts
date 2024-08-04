import { ICreateShippingMethodDTO } from '../dtos/create_shipping_method.dto';
import { IShippingMethodDTO } from '../dtos/shipping_method.dto';

export interface ICreateShippingMethodUseCase {
  exec(
    shippingMethodDTO: ICreateShippingMethodDTO,
  ): Promise<IShippingMethodDTO>;
}
