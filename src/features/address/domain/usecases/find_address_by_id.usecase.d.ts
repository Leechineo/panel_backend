import { IAddressEntity } from '../entities/address.entity';

export interface IFindAddressByIdUseCase {
  exec(id: string): Promise<IAddressEntity | null>;
}
