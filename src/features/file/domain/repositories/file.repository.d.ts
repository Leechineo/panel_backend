import { IFileEntity } from '../../../../core/domain/entities/file.entity';
import { IFileReferenceEntity } from '../entities/file_reference.entity';

export type UploadResult = {
  success: boolean;
  error?: string;
  url?: string;
};

export interface IFileRepository {
  uploadFile(path: string, file: IFileEntity): Promise<UploadResult>;
  downloadFile(path: string): Promise<IFileEntity>;
  saveFileReference(path: string): Promise<IFileReferenceEntity>;
  findFileReference(id: string): Promise<IFileReferenceEntity>;
  getAllFileReferences(): Promise<IFileReferenceEntity[]>;
}
