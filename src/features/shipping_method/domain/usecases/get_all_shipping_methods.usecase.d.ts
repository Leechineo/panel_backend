import { IShippingMethodDTO } from '../dtos/shipping_method.dto';

export interface IGetAllShippingMethodsUseCase {
  exec(): Promise<IShippingMethodDTO[]>;
}
