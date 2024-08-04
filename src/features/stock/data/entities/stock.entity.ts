/* eslint-disable @typescript-eslint/no-explicit-any */
import { CountryEnum } from '../../../../core/domain/enums/country.enum';
import { CurrencyEnum } from '../../../../core/domain/enums/currency.enum';
import { IStockEntity } from '../../domain/entities/stock.entity';

export class StockEntity implements IStockEntity {
  public id: `stock-${string}`;
  public name: string;
  public country: CountryEnum;
  public shippingMethod: string;
  public currency: CurrencyEnum;
  public createdAt: Date;

  constructor(props: IStockEntity) {
    this.id = props.id;
    this.name = props.name;
    this.country = props.country;
    this.shippingMethod = props.shippingMethod;
    this.currency = props.currency;
    this.createdAt = props.createdAt;
  }

  static currencyFromString(currency?: string): CurrencyEnum | undefined {
    switch (currency) {
      case 'BRL':
        return CurrencyEnum.BRL;
      case 'USD':
        return CurrencyEnum.USD;
      default:
        return undefined;
    }
  }

  static countryFromString(country?: string): CountryEnum | undefined {
    switch (country) {
      case 'br':
        return CountryEnum.BR;
      case 'cn':
        return CountryEnum.CN;
      default:
        return undefined;
    }
  }

  static fromJson(json: Record<string, any>): StockEntity {
    return new StockEntity({
      id: json['id'],
      name: json['name'],
      country: StockEntity.countryFromString(json['country']) ?? CountryEnum.BR,
      shippingMethod: json['shippingMethod'],
      currency:
        StockEntity.currencyFromString(json['currency']) ?? CurrencyEnum.BRL,
      createdAt: json['createdAt'],
    });
  }
}
