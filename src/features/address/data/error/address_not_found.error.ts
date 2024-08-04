import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class AddressNotFoundError extends AppError {
  error = 'address.address_not_found';
  message = 'Endereço não encontrado.';
  code = 404;
}
