import * as fs from 'fs';

import * as admin from 'firebase-admin';
import { Storage } from 'firebase-admin/storage';
import fetch from 'cross-fetch';

import {
  IStorageAdapter,
  UploadResult,
} from '../domain/adapters/storage.adapter.adapter';
import { IFileEntity } from '../domain/entities/file.entity';
import { InvalidFirebaseCertsError } from '../data/errors/invalid_firebase_certs.error';
import { DownloadFailedError } from '../data/errors/download_failed.error';

const serviceAccountPath = process.env.FIREBASE_CERTS_DIRECTORY;

if (!serviceAccountPath) {
  throw new InvalidFirebaseCertsError();
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DB_URL,
  storageBucket: process.env.FIREBASE_BUCKET,
});

export class StorageAdapter implements IStorageAdapter {
  private storage: Storage;
  constructor() {
    this.storage = admin.storage();
  }
  async uploadFile(path: string, file: IFileEntity): Promise<UploadResult> {
    const storageRef = this.storage.bucket().file(path);
    try {
      await storageRef.save(file.buffer, {
        metadata: {
          contentType: file.type,
        },
      });
      return {
        success: true,
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          error: error.message,
        };
      }
      throw error;
    }
  }
  async downloadFile(path: string): Promise<IFileEntity | null> {
    const storageRef = this.storage.bucket().file(path);
    try {
      const donwloadUrlExpiration = new Date(Date.now() + 3600000);
      const [url] = await storageRef.getSignedUrl({
        action: 'read',
        expires: donwloadUrlExpiration,
      });
      const response = await fetch(url);
      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      return {
        name: path.split('/').pop() ?? 'file',
        type: blob.type,
        buffer,
        encoding: '',
        size: blob.size,
      };
    } catch (error) {
      console.log(error);
      throw new DownloadFailedError();
    }
  }
}
