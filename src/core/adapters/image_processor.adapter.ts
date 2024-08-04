import sharp from 'sharp';

import { IImageProcessorAdapter } from '../domain/adapters/image_processor.adapter';
import { IFileEntity } from '../domain/entities/file.entity';

export class ImageProcessorAdapter implements IImageProcessorAdapter {
  async convertToJpeg(input: IFileEntity): Promise<IFileEntity> {
    const fileBuffer = input.buffer;
    const convertedBuffer = await sharp(fileBuffer).jpeg().toBuffer();
    const convertedFile: IFileEntity = {
      ...input,
      buffer: convertedBuffer,
    };
    return convertedFile;
  }
  async resize(
    input: IFileEntity,
    dimensions?: number | undefined,
    width?: number | undefined,
    height?: number | undefined,
  ): Promise<IFileEntity> {
    const fileBuffer = input.buffer;
    const resizedBuffer = await sharp(fileBuffer)
      .resize(width || dimensions || 1024, height)
      .jpeg()
      .toBuffer();
    const resizedFile: IFileEntity = {
      ...input,
      buffer: resizedBuffer,
    };

    return resizedFile;
  }
  async crop(
    input: IFileEntity,
    left: number,
    top: number,
    width: number,
    height: number,
  ): Promise<IFileEntity> {
    const fileBuffer = input.buffer;
    const croppedBuffer = await sharp(fileBuffer)
      .extract({ left, top, width, height })
      .toBuffer();
    const croppedFile: IFileEntity = {
      ...input,
      buffer: croppedBuffer,
    };

    return croppedFile;
  }
}
