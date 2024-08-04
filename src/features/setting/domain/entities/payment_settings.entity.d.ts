export type Installment = {
  installmentValue: number;
  minPrice: number;
  interest: number;
};

export type InstallmentsSettings = {
  enabled: boolean;
  installments: Installment[];
};

export type PaymentMethodName = 'pix' | 'slip' | 'credit_card';

export type PaymentMethodSettings = {
  name: PaymentMethodName;
  discount: number;
  enabled: boolean;
};

export type PaymentSettingsValue = {
  paymentMethods: PaymentMethodSettings[];
  installments: InstallmentsSettings;
};

export interface IPaymentSettingsEntity {
  id: string;
  name: string;
  value: PaymentSettingsValue;
  createdAt: Date;
}
