import { IAddressEntity } from '../entities/address.entity';

export interface IFindAddressFromZipcodeUseCase {
  exec(zipcode: string): Promise<Partial<IAddressEntity> | null>;
}
