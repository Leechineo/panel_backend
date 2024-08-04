import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class FileNotFoundError extends AppError {
  code = 404;
  error = 'file.not_found';
  message = 'Arquivo não encontrado';
}
