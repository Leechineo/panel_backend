import crypto from 'crypto';
import { InvalidPathNameError } from '../errors/invalid_path_name.error';
import { IPathTransformUseCase } from '../../domain/usecases/path_transform.usecase';

export class PathTransformUseCase implements IPathTransformUseCase {
  exec(path: string): string {
    const pathId = crypto.randomUUID();
    if (!path.includes('.')) {
      throw new InvalidPathNameError();
    }
    const [pathName, pathExtension] = path.split('.');
    const uniquePath = `${pathName}-${pathId}.${pathExtension}`
      .replace(/\.(?=.*\.)/g, '-')
      .replace(/-/g, '')
      .replace(' ', '-')
      .trim();
    return uniquePath;
  }
}
