import { IStockEntity } from '../../../../../core/domain/entities/stock.entity';
import { CountryEnum } from '../../../../../core/domain/enums/country.enum';
import { CurrencyEnum } from '../../../../../core/domain/enums/currency.enum';
import { CreateStockUseCase } from '../../../data/usecases/create_stock.usecase';
import { IStockRepository } from '../../../domain/repositories/stock.repository';

const stockRepositoryMock: jest.Mocked<IStockRepository> = {
  createStock: jest.fn(),
  updateStock: jest.fn(),
  deleteStock: jest.fn(),
  getAllStocks: jest.fn(),
  getStockById: jest.fn(),
};
describe('CreateStockUseCase', () => {
  it('Should return a new stock', async () => {
    const stockToBeCreated: IStockEntity = {
      id: 'stock-asdkf',
      country: CountryEnum.BR,
      currency: CurrencyEnum.BRL,
      name: 'Açailândia',
      shippingMethod: 'shippingMethodId',
      createdAt: new Date(Date.now()),
    };
    stockRepositoryMock.createStock.mockResolvedValueOnce(stockToBeCreated);
    const sut = new CreateStockUseCase(stockRepositoryMock);
    const stockCreated = await sut.exec(stockToBeCreated);
    expect(stockCreated.id).toBeDefined();
  });
});
