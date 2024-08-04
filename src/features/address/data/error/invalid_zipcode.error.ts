import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class InvalidZipcodeError extends AppError {
  code = 400;
  error = 'invalid_zipcode';
  message = 'Cep inválido.';
}
