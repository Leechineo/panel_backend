import { IFileEntity } from '../../../../core/domain/entities/file.entity';
import {
  IFileRepository,
  UploadResult,
} from '../../domain/repositories/file.repository';
import { IUploadFileUseCase } from '../../domain/usecases/upload_file.usecase';

export class UploadFileUseCase implements IUploadFileUseCase {
  constructor(private repository: IFileRepository) {}
  async exec(file: IFileEntity, path: string): Promise<UploadResult> {
    const result = await this.repository.uploadFile(path, file);
    return result;
  }
}
