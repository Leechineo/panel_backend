import { DataRequestArgs } from '../../../../core/domain/types/data_request.types';
import { PaginatedResultOutput } from '../../../../core/domain/types/pagination.types';
import { IAddressEntity } from '../../domain/entities/address.entity';
import { IAddressRepository } from '../../domain/repositories/address.repository';
import { IFindUserAddressesUseCase } from '../../domain/usecases/find_user_addresses.usecase';

export class FindUserAddressesUseCase implements IFindUserAddressesUseCase {
  constructor(private repository: IAddressRepository) {}

  async exec(
    userId: string,
    args: DataRequestArgs,
  ): Promise<PaginatedResultOutput<IAddressEntity>> {
    const addresses = await this.repository.findUserAddresses(userId, args);
    return addresses;
  }
}
