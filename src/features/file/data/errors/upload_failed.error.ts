import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class UploadFailedError extends AppError {
  code = 500;
  error = 'upload_error';
  message = 'Falha ao fazer upload do arquivo';
}
