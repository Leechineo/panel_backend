import { IShippingMethodDTO } from '../../domain/dtos/shipping_method.dto';
import { IUpdateShippingShippingMethodDTO } from '../../domain/dtos/update_shipping_method.dto';
import { IShippingMethodRepository } from '../../domain/repositories/shipping_method.repository';
import { IUpdateShippingMethodUseCase } from '../../domain/usecases/update_shipping_method.usecase';

export class UpdateShippingMethodUseCase
  implements IUpdateShippingMethodUseCase
{
  constructor(private shippingMethodRepository: IShippingMethodRepository) {}
  async exec(
    shippingMethodDTO: IUpdateShippingShippingMethodDTO,
  ): Promise<IShippingMethodDTO> {
    const shippingMethodUpdated =
      await this.shippingMethodRepository.updateShippingMethod(
        shippingMethodDTO,
      );
    return shippingMethodUpdated;
  }
}
