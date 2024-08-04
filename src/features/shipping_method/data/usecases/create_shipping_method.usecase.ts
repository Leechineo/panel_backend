import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import { ICreateShippingMethodDTO } from '../../domain/dtos/create_shipping_method.dto';
import { IShippingMethodDTO } from '../../domain/dtos/shipping_method.dto';
import { IShippingMethodRepository } from '../../domain/repositories/shipping_method.repository';
import { ICreateShippingMethodUseCase } from '../../domain/usecases/create_shipping_method.usecase';

export class CreateShippingMethodUseCase
  implements ICreateShippingMethodUseCase
{
  constructor(private shippingMethodRepository: IShippingMethodRepository) {}

  async exec(
    shippingMethodDTO: ICreateShippingMethodDTO,
  ): Promise<IShippingMethodDTO> {
    const price = shippingMethodDTO.defaultMapping.price;
    if (!price || !price.currency || typeof price.value !== 'number') {
      throw new InvalidRequestError();
    }
    const arriveTime = shippingMethodDTO.defaultMapping.arriveTime;
    if (
      typeof arriveTime.max !== 'number' ||
      typeof arriveTime.min !== 'number'
    ) {
      throw new InvalidRequestError();
    }
    const createdShippingMethod =
      await this.shippingMethodRepository.createShippingMethod({
        name: shippingMethodDTO.name,
        defaultMapping: shippingMethodDTO.defaultMapping,
        mappings: shippingMethodDTO.mappings ?? [],
        products: shippingMethodDTO.products ?? [],
      });
    return createdShippingMethod;
  }
}
