import { CountryEnum } from '../../../../core/domain/enums/country.enum';
import { CurrencyEnum } from '../../../../core/domain/enums/currency.enum';

export interface IStockEntity {
  id: `stock-${string}`;
  name: string;
  country: CountryEnum;
  shippingMethod: string;
  currency: CurrencyEnum;
  createdAt: Date;
}
