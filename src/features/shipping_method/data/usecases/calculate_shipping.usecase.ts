import { IAddressRepository } from '../../../address/domain/repositories/address.repository';
import { ShippingMethodMapping } from '../../domain/entities/shipping_method.entity';
import { IShippingMethodRepository } from '../../domain/repositories/shipping_method.repository';
import { ICalculateShippingUseCase } from '../../domain/usecases/calculate_shipping.usecase';
import { IFindMappingUseCase } from '../../domain/usecases/find_mapping.usecase';

export class CalculateShippingUseCase implements ICalculateShippingUseCase {
  constructor(
    private args: {
      addressRepository: IAddressRepository;
      shippingMethodRepository: IShippingMethodRepository;
      findMappingUseCase: IFindMappingUseCase;
    },
  ) {}
  async exec(args: {
    addressId: string;
    shippingMethodId: string;
    productId?: number | undefined;
  }): Promise<ShippingMethodMapping | null> {
    const address = await this.args.addressRepository.findAddressById(
      args.addressId,
    );
    const shippingMethod =
      await this.args.shippingMethodRepository.getShippingMethodById(
        args.shippingMethodId,
      );
    const shippingMethodProduct = shippingMethod.products.find(
      (item) => item.id === args.productId,
    );
    if (shippingMethodProduct) {
      const shippingMethodProductMapping = this.args.findMappingUseCase.exec(
        shippingMethodProduct.mappings,
        address,
      );
      if (shippingMethodProductMapping) {
        return shippingMethodProductMapping;
      }
    }
    if (args.productId) {
      return null;
    }
    return (
      this.args.findMappingUseCase.exec(shippingMethod.mappings, address) ??
      shippingMethod.defaultMapping
    );
  }
}
