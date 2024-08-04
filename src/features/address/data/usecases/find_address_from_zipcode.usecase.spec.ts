import { IAddressEntity } from '../../domain/entities/address.entity';
import { IAddressRepository } from '../../domain/repositories/address.repository';
import { FindAddressFromZipcodeUseCase } from './find_address_from_zipcode.usecase';

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
describe('FindAddressFromZipcodeUseCase', () => {
  it('Shoud return an address from zipcode', async () => {
    const repo = new Repo();
    const findAddresFromZipcodeUseCase = new FindAddressFromZipcodeUseCase(
      repo,
    );
    const address = await findAddresFromZipcodeUseCase.exec('65930-0000');
    expect(address).toBeDefined();
  });
});
