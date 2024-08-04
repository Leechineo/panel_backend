import { IStockEntity } from '../../../../../core/domain/entities/stock.entity';
import { CountryEnum } from '../../../../../core/domain/enums/country.enum';
import { CurrencyEnum } from '../../../../../core/domain/enums/currency.enum';
import { UpdateStockUseCase } from '../../../data/usecases/update_stock.usecase';
import { IStockRepository } from '../../../domain/repositories/stock.repository';

const stockRepositoryMock: jest.Mocked<IStockRepository> = {
  createStock: jest.fn(),
  updateStock: jest.fn(),
  deleteStock: jest.fn(),
  getAllStocks: jest.fn(),
  getStockById: jest.fn(),
};

describe('UpdateStockUseCase', () => {
  it('should return updated stock', async () => {
    const stockToBeUpdated: IStockEntity = {
      id: 'stock-asdkf',
      country: CountryEnum.BR,
      currency: CurrencyEnum.BRL,
      name: 'Açailândia',
      shippingMethod: 'shippingMethodId',
      createdAt: new Date(Date.now()),
    };
    stockRepositoryMock.updateStock.mockResolvedValueOnce(stockToBeUpdated);
    const sut = new UpdateStockUseCase(stockRepositoryMock);
    const stockUpdated = await sut.exec(stockToBeUpdated);
    expect(stockUpdated.id).toStrictEqual('stock-asdkf');
  });
});
