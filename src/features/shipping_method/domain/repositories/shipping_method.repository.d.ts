import { ICreateShippingMethodDTO } from '../dtos/create_shipping_method.dto';
import { IShippingMethodDTO } from '../dtos/shipping_method.dto';
import { IUpdateShippingShippingMethodDTO } from '../dtos/update_shipping_method.dto';

export interface IShippingMethodRepository {
  createShippingMethod(
    createShippingMethodDTO: ICreateShippingMethodDTO,
  ): Promise<IShippingMethodDTO>;
  getAllShippingMethods(): Promise<IShippingMethodDTO[]>;
  getShippingMethodById(shippingMethodId: string): Promise<IShippingMethodDTO>;
  updateShippingMethod(
    updateShippingMethodDTO: IUpdateShippingShippingMethodDTO,
  ): Promise<IShippingMethodDTO>;
  deleteShippingMethod(shippingMethodId: string): Promise<IShippingMethodDTO>;
}
