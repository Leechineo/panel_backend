import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class ProductNotFoundError extends AppError {
  code = 404;
  message = 'Produto não encontrado';
  error = 'product.product_not_found';
}
