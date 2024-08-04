import crypto from 'crypto';

import { IAppModel } from '../../../../core/domain/adapters/app_model.adapter';
import { IStorageAdapter } from '../../../../core/domain/adapters/storage.adapter.adapter';
import {
  IFileRepository,
  UploadResult,
} from '../../domain/repositories/file.repository';
import { IFileEntity } from '../../../../core/domain/entities/file.entity';
import { IFileReferenceEntity } from '../../domain/entities/file_reference.entity';
import { FileReferenceEntity } from '../entities/file_reference.entity';
import { UploadFailedError } from '../errors/upload_failed.error';
import { FileNotFoundError } from '../errors/file_not_found.error';
import { FileReferenceNotFoundError } from '../errors/file_reference_not_found.error';

export class FileRepository implements IFileRepository {
  constructor(
    private storageAdapter: IStorageAdapter,
    private fileModel: IAppModel<IFileReferenceEntity>,
  ) {}
  async getAllFileReferences(): Promise<IFileReferenceEntity[]> {
    const fileReferences = await this.fileModel.find();
    return fileReferences.map((item) => FileReferenceEntity.fromJson(item));
  }
  async findFileReference(id: string): Promise<IFileReferenceEntity> {
    const fileReference = await this.fileModel.findById(id);
    if (fileReference) {
      return FileReferenceEntity.fromJson(fileReference);
    }
    throw new FileReferenceNotFoundError();
  }
  async saveFileReference(path: string): Promise<IFileReferenceEntity> {
    const storedFile = await this.fileModel.create({
      id: `file-${crypto.randomUUID()}`,
      path: path,
      type: 'dynamic',
      createdAt: new Date(Date.now()),
    });
    return storedFile;
  }
  async uploadFile(path: string, file: IFileEntity): Promise<UploadResult> {
    const result = await this.storageAdapter.uploadFile(path, file);
    if (result.success) {
      return result;
    }
    throw new UploadFailedError();
  }
  async downloadFile(path: string): Promise<IFileEntity> {
    const file = await this.storageAdapter.downloadFile(path);
    if (file) {
      return file;
    }
    throw new FileNotFoundError();
  }
}
