import { IFileEntity } from '../../../../core/domain/entities/file.entity';
import { UploadResult } from '../repositories/file.repository';

export interface IUploadFileUseCase {
  exec(file: IFileEntity, path: string): Promise<UploadResult>;
}
