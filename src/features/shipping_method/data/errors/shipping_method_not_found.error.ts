import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class ShippingMethodNotFoundError extends AppError {
  code = 404;
  message = 'Método de envio não encontrado';
  error = 'shipping_method.shipping_method_not_found';
}
