import { AppError } from '../../../../core/data/exceptions/app_error.exception';

export class FileIsNotAnImageError extends AppError {
  code = 400;
  error = 'converter.file_is_not_a_image';
  message = 'Não é posssível converter um arquivo que não seja uma imagem';
}
