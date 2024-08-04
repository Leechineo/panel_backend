import { IAddressEntity } from '../../../address/domain/entities/address.entity';
import {
  ShippingMethodMapping,
  ShippingMethodState,
} from '../../domain/entities/shipping_method.entity';
import { IFindMappingUseCase } from '../../domain/usecases/find_mapping.usecase';
import { IFindRegionUseCase } from '../../domain/usecases/find_region.usecase';

export class FindMappingUseCase implements IFindMappingUseCase {
  constructor(
    private args: {
      findRegionUseCase: IFindRegionUseCase;
    },
  ) {}
  exec(
    mappings: ShippingMethodMapping[],
    address: IAddressEntity,
  ): ShippingMethodMapping | null {
    return (
      mappings.find(
        (item) =>
          item.radiusData?.city === address.city ||
          item.radiusData?.state === address.state ||
          item.radiusData?.region ===
            this.args.findRegionUseCase.exec(
              address.state as ShippingMethodState,
            ),
      ) ?? null
    );
  }
}
