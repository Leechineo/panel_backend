import { IShippingMethodDTO } from '../../domain/dtos/shipping_method.dto';
import { IShippingMethodRepository } from '../../domain/repositories/shipping_method.repository';
import { IDeleteShippingMethodUseCase } from '../../domain/usecases/delete_shipping_method.usecase';

export class DeleteShippingMethodUseCase
  implements IDeleteShippingMethodUseCase
{
  constructor(private shippingMethodRepository: IShippingMethodRepository) {}

  async exec(shippingMethodId: string): Promise<IShippingMethodDTO> {
    const shippingMethodDeleted =
      await this.shippingMethodRepository.deleteShippingMethod(
        shippingMethodId,
      );
    return shippingMethodDeleted;
  }
}
