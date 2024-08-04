import { IFileReferenceEntity } from '../entities/file_reference.entity';

export interface IGetFileReferenceUseCase {
  exec(id: string): Promise<IFileReferenceEntity>;
}
