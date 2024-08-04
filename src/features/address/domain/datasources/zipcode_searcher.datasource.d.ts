import { IAddressEntity } from '../entities/address.entity';

export interface IZipcodeSearcherDataSource {
  search(zipcode: string): Promise<Partial<IAddressEntity>>;
}
