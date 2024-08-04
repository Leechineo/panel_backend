import { IFileEntity } from '../entities/file.entity';

export type UploadResult = {
  success: boolean;
  error?: string;
  url?: string;
};

export interface IStorageAdapter {
  uploadFile(path: string, file: IFileEntity): Promise<UploadResult>;
  downloadFile(path: string): Promise<IFileEntity | null>;
}
