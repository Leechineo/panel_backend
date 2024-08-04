import { IFileReferenceEntity } from '../../../features/file/domain/entities/file_reference.entity';
import { AppModelAdapter } from '../../adapters/app_model.adapter';

export const FileModel = new AppModelAdapter<IFileReferenceEntity>('files', {
  id: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'dynamic',
  },
  createdAt: {
    type: Date,
    required: true,
  },
});
