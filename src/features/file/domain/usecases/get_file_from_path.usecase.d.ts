import { IFileEntity } from '../../../../core/domain/entities/file.entity';

export interface IGetFileFromPathUseCase {
  exec(path: string): Promise<IFileEntity>;
}
