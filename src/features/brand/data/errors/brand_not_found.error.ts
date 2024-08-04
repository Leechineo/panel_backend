import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class BrandNotFoundError extends AppError {
  public code = 404;
  public error = 'brand.brand_not_found';
  public message = 'Marca não encontrada';
}
