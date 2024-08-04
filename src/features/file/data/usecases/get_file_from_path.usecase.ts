import { IStorageAdapter } from '../../../../core/domain/adapters/storage.adapter.adapter';
import { IFileEntity } from '../../../../core/domain/entities/file.entity';
import { IGetFileFromPathUseCase } from '../../domain/usecases/get_file_from_path.usecase';
import { FileNotFoundError } from '../errors/file_not_found.error';

export class GetFileFromPathUseCase implements IGetFileFromPathUseCase {
  constructor(private storageAdapter: IStorageAdapter) {}
  async exec(path: string): Promise<IFileEntity> {
    const file = await this.storageAdapter.downloadFile(path);
    if (file) {
      return file;
    }
    throw new FileNotFoundError();
  }
}
