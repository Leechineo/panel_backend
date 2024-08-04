import { IFileReferenceEntity } from '../entities/file_reference.entity';

export interface ISaveFileReferenceUseCase {
  exec(path: string): Promise<IFileReferenceEntity>;
}
