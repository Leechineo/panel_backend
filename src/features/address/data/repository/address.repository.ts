import { IAppModel } from '../../../../core/domain/adapters/app_model.adapter';
import { DataRequestArgs } from '../../../../core/domain/types/data_request.types';
import { PaginatedResultOutput } from '../../../../core/domain/types/pagination.types';
import { IZipcodeSearcherDataSource } from '../../domain/datasources/zipcode_searcher.datasource';
import { IAddressEntity } from '../../domain/entities/address.entity';
import { IAddressMapper } from '../../domain/mappers/address.mapper';
import { IAddressRepository } from '../../domain/repositories/address.repository';
import { AddressNotFoundError } from '../error/address_not_found.error';

export class AddressRepository implements IAddressRepository {
  constructor(
    private addressModel: IAppModel<IAddressEntity>,
    private addressMapper: IAddressMapper,
    private zipcodeSearcherAdapter: IZipcodeSearcherDataSource,
  ) {}

  async findAddressById(id: string): Promise<IAddressEntity> {
    const address = await this.addressModel.findById(id);
    if (!address) {
      throw new AddressNotFoundError();
    }
    return this.addressMapper.fromJsonDataToEntity(address);
  }

  async findUserAddresses(
    userId: string,
    args: DataRequestArgs,
  ): Promise<PaginatedResultOutput<IAddressEntity>> {
    const paginatedAddresses = await this.addressModel.findPaginated(
      {
        page: args.pagination.page,
        limit: args.pagination.limit,
      },
      { user: userId },
    );
    return {
      total: paginatedAddresses.total,
      items: paginatedAddresses.items.map((item) =>
        this.addressMapper.fromJsonDataToEntity(item),
      ),
    };
  }
  async findAddressByZipcode(
    zipcode: string,
  ): Promise<Partial<IAddressEntity>> {
    const addressFound = await this.zipcodeSearcherAdapter.search(zipcode);
    return addressFound;
  }
}
