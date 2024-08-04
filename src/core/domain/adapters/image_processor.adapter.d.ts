import { IFileEntity } from '../entities/file.entity';

export interface IImageProcessorAdapter {
  resize(
    input: IFileEntity,
    dimensions?: number,
    width?: number,
    height?: number,
  ): Promise<IFileEntity>;
  convertToJpeg(input: IFileEntity): Promise<IFileEntity>;
  crop(
    input: IFileEntity,
    left: number,
    top: number,
    width: number,
    height: number,
  ): Promise<IFileEntity>;
}
