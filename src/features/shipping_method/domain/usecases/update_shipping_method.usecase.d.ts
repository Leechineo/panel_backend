import { IShippingMethodDTO } from '../dtos/shipping_method.dto';
import { IUpdateShippingShippingMethodDTO } from '../dtos/update_shipping_method.dto';

export interface IUpdateShippingMethodUseCase {
  exec(
    shippingMethodDTO: IUpdateShippingShippingMethodDTO,
  ): Promise<IShippingMethodDTO>;
}
