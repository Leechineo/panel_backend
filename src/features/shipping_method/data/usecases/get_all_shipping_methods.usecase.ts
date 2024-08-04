import { IShippingMethodDTO } from '../../domain/dtos/shipping_method.dto';
import { IShippingMethodRepository } from '../../domain/repositories/shipping_method.repository';
import { IGetAllShippingMethodsUseCase } from '../../domain/usecases/get_all_shipping_methods.usecase';

export class GetAllShippingMethodsUseCase
  implements IGetAllShippingMethodsUseCase
{
  constructor(private shippingMethodRepository: IShippingMethodRepository) {}

  async exec(): Promise<IShippingMethodDTO[]> {
    const shippingMethods =
      await this.shippingMethodRepository.getAllShippingMethods();
    return shippingMethods;
  }
}
