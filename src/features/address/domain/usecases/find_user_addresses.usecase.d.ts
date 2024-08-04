import { DataRequestArgs } from '../../../../core/domain/types/data_request.types';
import { PaginatedResultOutput } from '../../../../core/domain/types/pagination.types';
import { IAddressEntity } from '../entities/address.entity';

export interface IFindUserAddressesUseCase {
  exec(
    userId: string,
    args: DataRequestArgs,
  ): Promise<PaginatedResultOutput<IAddressEntity>>;
}
