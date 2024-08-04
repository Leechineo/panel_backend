export interface IGetPathFromIdUseCase {
  exec(id: string): Promise<string>;
}
