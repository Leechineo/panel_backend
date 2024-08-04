import { IFileReferenceEntity } from '../../domain/entities/file_reference.entity';
import { IFileRepository } from '../../domain/repositories/file.repository';
import { ISaveFileReferenceUseCase } from '../../domain/usecases/save_file_reference.usecase';

export class SaveFileReferenceUseCase implements ISaveFileReferenceUseCase {
  constructor(private repository: IFileRepository) {}
  async exec(path: string): Promise<IFileReferenceEntity> {
    const fileReference = await this.repository.saveFileReference(path);
    return fileReference;
  }
}
