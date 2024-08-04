import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class EnabledPaymentMethodsNotConfiguredError extends AppError {
  code = 400;
  error = 'setting.enabled_payment_methods_not_configured';
  message = 'Ativação dos métodos de pagamento não configurada.';
}
