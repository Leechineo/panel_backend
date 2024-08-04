import { DataRequestArgs } from '../../../../core/domain/types/data_request.types';
import { PaginatedResultOutput } from '../../../../core/domain/types/pagination.types';
import { IAddressEntity } from '../entities/address.entity';

export interface IAddressRepository {
  findUserAddresses(
    userId: string,
    args: DataRequestArgs,
  ): Promise<PaginatedResultOutput<IAddressEntity>>;
  findAddressByZipcode(zipcode: string): Promise<Partial<IAddressEntity>>;
  findAddressById(id: string): Promise<IAddressEntity>;
}
