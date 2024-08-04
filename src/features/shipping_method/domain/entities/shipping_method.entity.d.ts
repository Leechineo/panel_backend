import { CurrencyEnum } from '../../../../core/domain/enums/currency.enum';
import { RegionRadiusEnum } from '../../../../core/domain/enums/region_radius.enum';

export type ShippingMethodRegion =
  | 'norte'
  | 'nordeste'
  | 'centro-oeste'
  | 'sudeste'
  | 'sul';

export type ShippingMethodState =
  | 'AC'
  | 'AL'
  | 'AP'
  | 'AM'
  | 'BA'
  | 'CE'
  | 'DF'
  | 'ES'
  | 'GO'
  | 'MA'
  | 'MT'
  | 'MS'
  | 'MG'
  | 'PA'
  | 'PB'
  | 'PR'
  | 'PE'
  | 'PI'
  | 'RJ'
  | 'RN'
  | 'RS'
  | 'RO'
  | 'RR'
  | 'SC'
  | 'SP'
  | 'SE'
  | 'TO';

export type ShippingMethodPrice = {
  currency: CurrencyEnum;
  value: number;
};

export type ShippingMethodArriveTime = {
  min: number;
  max: number;
};

export type ShippingMethodRadiusData = {
  city: string;
  state: ShippingMethodState;
  region: ShippingMethodRegion;
};

export type ShippingMethodMapping = {
  id?: string;
  zipcode?: string;
  arriveTime: ShippingMethodArriveTime;
  price: ShippingMethodPrice;
  regionRadius?: RegionRadiusEnum;
  radiusData?: ShippingMethodRadiusData;
};

export type ShippingMethodProduct = {
  id: number;
  mappings: ShippingMethodMapping[];
};

export interface IShippingMethodEntity {
  id: string;
  name: string;
  defaultMapping: ShippingMethodMapping;
  mappings: ShippingMethodMapping[];
  products: ShippingMethodProduct[];
  createdAt: Date;
}
