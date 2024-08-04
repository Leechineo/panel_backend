import { IShippingMethodDTO } from '../../domain/dtos/shipping_method.dto';
import { IShippingMethodRepository } from '../../domain/repositories/shipping_method.repository';
import { IGetShippingMethodByIdUseCase } from '../../domain/usecases/get_shipping_method_by_id.usecase';

export class GetShippingMethodByIdUseCase
  implements IGetShippingMethodByIdUseCase
{
  constructor(private shippingMethodRepository: IShippingMethodRepository) {}

  async exec(shippingMethodId: string): Promise<IShippingMethodDTO> {
    const shippingMethod =
      await this.shippingMethodRepository.getShippingMethodById(
        shippingMethodId,
      );
    return shippingMethod;
  }
}
