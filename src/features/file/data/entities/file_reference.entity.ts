/* eslint-disable @typescript-eslint/no-explicit-any */

import { IFileReferenceEntity } from '../../domain/entities/file_reference.entity';

export class FileReferenceEntity implements IFileReferenceEntity {
  public id: string;
  public path: string;
  public type: string;
  public createdAt: Date;
  constructor(props: IFileReferenceEntity) {
    this.id = props.id;
    this.path = props.path;
    this.type = props.type;
    this.createdAt = props.createdAt;
  }
  static fromJson(json: Record<string, any>) {
    return new FileReferenceEntity({
      id: json['id'],
      path: json['path'],
      type: json['type'],
      createdAt: new Date(json['createdAt']),
    });
  }
}
