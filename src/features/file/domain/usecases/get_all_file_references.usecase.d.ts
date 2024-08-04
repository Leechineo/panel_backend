import { IFileReferenceEntity } from '../entities/file_reference.entity';

export interface IGetAllFileReferencesUseCase {
  exec(): Promise<IFileReferenceEntity[]>;
}
