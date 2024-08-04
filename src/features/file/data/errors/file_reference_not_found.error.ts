import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class FileReferenceNotFoundError extends AppError {
  code = 404;
  error = 'getfile.file_reference_not_found';
  message = 'Referência de arquivo não encontrada.';
}
