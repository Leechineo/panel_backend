import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class InvalidPathNameError extends AppError {
  code = 400;
  error = 'invalid_path_name';
  message = 'O caminho é inválido.';
}
