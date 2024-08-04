/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAppMapper<DTO, Entity> {
  fromJsonDataToDTO(jsonData: Record<string, any>): DTO;
  fromEntityToDTO(entity: Entity): DTO;
  fromJsonDataToEntity(jsonData: Record<string, any>): Entity;
  fromDTOToEntity(dto: DTO): Entity;
}
