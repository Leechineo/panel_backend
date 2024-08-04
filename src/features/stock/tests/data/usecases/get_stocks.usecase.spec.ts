import { IStockEntity } from '../../../../../core/domain/entities/stock.entity';
import { CountryEnum } from '../../../../../core/domain/enums/country.enum';
import { CurrencyEnum } from '../../../../../core/domain/enums/currency.enum';
import { GetStocksUseCase } from '../../../data/usecases/get_stocks.usecase';
import { IStockRepository } from '../../../domain/repositories/stock.repository';

const stockRepositoryMock: jest.Mocked<IStockRepository> = {
  createStock: jest.fn(),
  updateStock: jest.fn(),
  deleteStock: jest.fn(),
  getAllStocks: jest.fn(),
  getStockById: jest.fn(),
};

const stockItems: IStockEntity[] = [
  {
    id: 'stock-1',
    name: 'Stock Item 1',
    country: CountryEnum.CN,
    shippingMethod: 'Method X',
    currency: CurrencyEnum.USD,
    createdAt: new Date('2023-10-01'),
  },
  {
    id: 'stock-2',
    name: 'Stock Item 2',
    country: CountryEnum.BR,
    shippingMethod: 'Method Y',
    currency: CurrencyEnum.BRL,
    createdAt: new Date('2023-10-02'),
  },
  {
    id: 'stock-3',
    name: 'Stock Item 3',
    country: CountryEnum.BR,
    shippingMethod: 'Method Z',
    currency: CurrencyEnum.USD,
    createdAt: new Date('2023-10-03'),
  },
];

describe('GetStocksUseCase', () => {
  it('should list all stocks', async () => {
    stockRepositoryMock.getAllStocks.mockResolvedValueOnce(stockItems);
    const sut = new GetStocksUseCase(stockRepositoryMock);
    const stocks = await sut.exec();
    expect(stocks).toHaveLength(3);
  });
});
