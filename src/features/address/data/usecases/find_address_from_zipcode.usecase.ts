import { IAddressEntity } from '../../domain/entities/address.entity';
import { IAddressRepository } from '../../domain/repositories/address.repository';
import { IFindAddressFromZipcodeUseCase } from '../../domain/usecases/find_address_from_zipcode.usecase';

export class FindAddressFromZipcodeUseCase
  implements IFindAddressFromZipcodeUseCase
{
  constructor(private repository: IAddressRepository) {}
  async exec(zipcode: string): Promise<Partial<IAddressEntity> | null> {
    const address = await this.repository.findAddressByZipcode(zipcode);
    if (address) {
      return address;
    }
    return null;
  }
}
