import { IFileRepository } from '../../domain/repositories/file.repository';
import { IGetPathFromIdUseCase } from '../../domain/usecases/get_path_from_id.usecase';
import { FileReferenceNotFoundError } from '../errors/file_reference_not_found.error';

export class GetPathFromIdUseCase implements IGetPathFromIdUseCase {
  constructor(private repository: IFileRepository) {}
  async exec(id: string): Promise<string> {
    const fileReference = await this.repository.findFileReference(id);
    if (fileReference) {
      return fileReference.path;
    }
    throw new FileReferenceNotFoundError();
  }
}
