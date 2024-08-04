export interface IFileEntity {
  name: string;
  size: number;
  type: string;
  encoding?: string;
  buffer: Buffer;
}
