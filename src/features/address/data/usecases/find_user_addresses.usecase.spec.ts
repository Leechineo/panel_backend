import { IAddressEntity } from '../../domain/entities/address.entity';
import { IAddressRepository } from '../../domain/repositories/address.repository';
import { FindUserAddressesUseCase } from './find_user_addresses.usecase';

class Repo implements IAddressRepository {
  private addresses: IAddressEntity[] = [
    {
      id: '63f15ce161eb29f66054e956',
      user: '62460f64edd3d94dafc21958',
      zipcode: '65930-000',
      city: 'Açailândia',
      name: 'Felipe Yslaoker',
      state: 'MA',
      district: 'Jacu',
      street: 'Rua 9 de Julho',
      number: '294',
      complement: '',
      reference: '',
      phone: '(99) 98439-3237',
      createdAt: new Date('2023-02-18T23:16:59.781Z'),
    },
  ];
  async findUserAddresses(userId: string): Promise<IAddressEntity[]> {
    const addresses = this.addresses.filter((item) => item.user == userId);
    return addresses;
  }
  async findAddressByZipcode(zipcode: string): Promise<IAddressEntity | null> {
    const address = this.addresses.find((item) => item.zipcode == zipcode);
    if (address) {
      return address;
    }
    return null;
  }
}

describe('FindUserAddressesUseCase', () => {
  const repo = new Repo();
  const findUserAddressesUseCase = new FindUserAddressesUseCase(repo);
  it('should return addresses from user', async () => {
    const addresses = await findUserAddressesUseCase.exec(
      '62460f64edd3d94dafc21958',
    );
    expect(addresses).toHaveLength(1);
  });
  it("shoudn't have addresses", async () => {
    const addresses = await findUserAddressesUseCase.exec(
      '62460f64edd3d94dafc21958c',
    );
    expect(addresses).toStrictEqual([]);
  });
});
