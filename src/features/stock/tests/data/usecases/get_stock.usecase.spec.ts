import { CountryEnum } from '../../../../../core/domain/enums/country.enum';
import { CurrencyEnum } from '../../../../../core/domain/enums/currency.enum';
import { GetStockUseCase } from '../../../data/usecases/get_stock.usecase';
import { IStockRepository } from '../../../domain/repositories/stock.repository';

const stockRepositoryMock: jest.Mocked<IStockRepository> = {
  createStock: jest.fn(),
  updateStock: jest.fn(),
  deleteStock: jest.fn(),
  getAllStocks: jest.fn(),
  getStockById: jest.fn(),
};

describe('GetStockUseCase', () => {
  it('Should return a usecase by id', async () => {
    stockRepositoryMock.getStockById.mockResolvedValueOnce({
      id: 'stock-1',
      name: 'Stock Item 1',
      country: CountryEnum.CN,
      shippingMethod: 'Method X',
      currency: CurrencyEnum.USD,
      createdAt: new Date('2023-10-01'),
    });
    const sut = new GetStockUseCase(stockRepositoryMock);
    const stock = await sut.exec('stock-1');
    expect(stock.id).toBeDefined();
    expect(stock.id).toStrictEqual('stock-1');
  });
});
