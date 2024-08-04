import { IAddressEntity } from '../../domain/entities/address.entity';
import { IZipcodeSearcherDataSource } from '../../domain/datasources/zipcode_searcher.datasource';
import { IHttpAdapter } from '../../../../core/domain/adapters/http.adapter';
import { IViacepAddress } from '../../domain/entities/viacep_address.entity';
import { InvalidZipcodeError } from '../error/invalid_zipcode.error';

export class ZipcodeSearcherDataSource implements IZipcodeSearcherDataSource {
  constructor(private http: IHttpAdapter) {}

  async search(zipcode: string): Promise<Partial<IAddressEntity>> {
    try {
      const viacepResponse = await this.http.get<IViacepAddress>(
        `https://viacep.com.br/ws/${zipcode.replace('-', '')}/json/`,
      );
      const viacepAddress = viacepResponse.data;
      const address: Partial<IAddressEntity> = {
        zipcode: viacepAddress.cep,
        street: viacepAddress.logradouro,
        complement: viacepAddress.complemento,
        district: viacepAddress.bairro,
        city: viacepAddress.localidade,
        state: viacepAddress.uf,
      };
      return address;
    } catch (error) {
      throw new InvalidZipcodeError();
    }
  }
}
