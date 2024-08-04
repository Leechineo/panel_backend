import { IImageProcessorAdapter } from '../../../../core/domain/adapters/image_processor.adapter';
import { IFileEntity } from '../../../../core/domain/entities/file.entity';
import {
  ConversionResult,
  IConvertImageUseCase,
} from '../../domain/usecases/convert_image.usecase';
import { FileIsNotAnImageError } from '../errors/file_is_not_an_image.error';

export class ConvertImageUseCase implements IConvertImageUseCase {
  constructor(private imageProcessor: IImageProcessorAdapter) {}
  async exec(path: string, file: IFileEntity): Promise<ConversionResult> {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      throw new FileIsNotAnImageError();
    }
    const maxImageSize = 2 * 1024 * 1024;
    const convertedPath = path.replace(/\.[^.]+$/, '.jpg');
    if (file.size > maxImageSize) {
      const compressedImage = await this.imageProcessor.resize(file, 1024);
      return {
        file: compressedImage,
        path: convertedPath,
      };
    }
    const convertedImage = await this.imageProcessor.convertToJpeg(file);
    return {
      file: convertedImage,
      path: convertedPath,
    };
  }
}
