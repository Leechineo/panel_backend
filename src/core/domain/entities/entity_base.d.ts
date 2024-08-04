/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IEntityBase {
  id: string;
  toJson(): Record<string, any>;
}
