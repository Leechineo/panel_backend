import {
  ShippingMethodState,
  ShippingMethodRegion,
} from '../../domain/entities/shipping_method.entity';
import { IFindRegionUseCase } from '../../domain/usecases/find_region.usecase';

export class FindRegionUseCase implements IFindRegionUseCase {
  exec(state: ShippingMethodState): ShippingMethodRegion {
    const regions: Record<ShippingMethodState, ShippingMethodRegion> = {
      AC: 'norte',
      AL: 'nordeste',
      AP: 'norte',
      AM: 'norte',
      BA: 'nordeste',
      CE: 'nordeste',
      DF: 'centro-oeste',
      ES: 'sudeste',
      GO: 'centro-oeste',
      MA: 'nordeste',
      MT: 'centro-oeste',
      MS: 'centro-oeste',
      MG: 'sudeste',
      PA: 'norte',
      PB: 'nordeste',
      PR: 'sul',
      PE: 'nordeste',
      PI: 'nordeste',
      RJ: 'sudeste',
      RN: 'nordeste',
      RS: 'sul',
      RO: 'norte',
      RR: 'norte',
      SC: 'sul',
      SP: 'sudeste',
      SE: 'nordeste',
      TO: 'norte',
    };
    return regions[state];
  }
}
