import { IStockEntity } from '../../../../../core/domain/entities/stock.entity';
import { CountryEnum } from '../../../../../core/domain/enums/country.enum';
import { CurrencyEnum } from '../../../../../core/domain/enums/currency.enum';
import { DeleteStockUseCase } from '../../../data/usecases/delete_stock.usecase';
import { IStockRepository } from '../../../domain/repositories/stock.repository';

const stockRepositoryMock: jest.Mocked<IStockRepository> = {
  createStock: jest.fn(),
  updateStock: jest.fn(),
  deleteStock: jest.fn(),
  getAllStocks: jest.fn(),
  getStockById: jest.fn(),
};

describe('DeleteStockUseCase', () => {
  it('Should return deleted stock', async () => {
    const stockTobeDeleted: IStockEntity = {
      id: 'stock-asdkf',
      country: CountryEnum.BR,
      currency: CurrencyEnum.BRL,
      name: 'Açailândia',
      shippingMethod: 'shippingMethodId',
      createdAt: new Date(Date.now()),
    };
    stockRepositoryMock.deleteStock.mockResolvedValueOnce(stockTobeDeleted);
    const sut = new DeleteStockUseCase(stockRepositoryMock);
    const stockDeleted = await sut.exec('stock-asdkf');
    expect(stockDeleted.id).toStrictEqual('stock-asdkf');
  });
});
