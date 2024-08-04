import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class StockNotFoundError extends AppError {
  public readonly code = 404;
  public readonly error = 'stock.stock_not_found';
  public readonly message = 'Estoque não encontrado';
}
