import { IFileReferenceEntity } from '../../domain/entities/file_reference.entity';
import { IFileRepository } from '../../domain/repositories/file.repository';
import { IGetFileReferenceUseCase } from '../../domain/usecases/get_file_reference.usecase';

export class GetFileReferenceUseCase implements IGetFileReferenceUseCase {
  constructor(private fileRepository: IFileRepository) {}
  async exec(id: string): Promise<IFileReferenceEntity> {
    const fileReference = await this.fileRepository.findFileReference(id);
    return fileReference;
  }
}
