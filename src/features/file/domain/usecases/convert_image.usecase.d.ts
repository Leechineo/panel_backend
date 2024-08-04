import { IFileEntity } from '../../../../core/domain/entities/file.entity';

export type ConversionResult = {
  file: IFileEntity;
  path: string;
};

export interface IConvertImageUseCase {
  exec(path: string, file: IFileEntity): Promise<ConversionResult>;
}
