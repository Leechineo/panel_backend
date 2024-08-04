import { IFileReferenceEntity } from '../../domain/entities/file_reference.entity';
import { IFileRepository } from '../../domain/repositories/file.repository';
import { IGetAllFileReferencesUseCase } from '../../domain/usecases/get_all_file_references.usecase';

export class GetAllFileReferencesUseCase
  implements IGetAllFileReferencesUseCase
{
  constructor(private fileRepository: IFileRepository) {}
  async exec(): Promise<IFileReferenceEntity[]> {
    const files = await this.fileRepository.getAllFileReferences();
    return files;
  }
}
