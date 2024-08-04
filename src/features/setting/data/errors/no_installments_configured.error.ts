import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class NoInstallmentsConfiguredError extends AppError {
  code = 400;
  error = 'setting.no_installments_configured';
  message = 'Nenhuma parcela configurada.';
}
