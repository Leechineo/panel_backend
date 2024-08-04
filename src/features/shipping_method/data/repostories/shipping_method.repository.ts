import { IAppModel } from '../../../../core/domain/adapters/app_model.adapter';
import { ICreateShippingMethodDTO } from '../../domain/dtos/create_shipping_method.dto';
import { IShippingMethodDTO } from '../../domain/dtos/shipping_method.dto';
import { IUpdateShippingShippingMethodDTO } from '../../domain/dtos/update_shipping_method.dto';
import { IShippingMethodEntity } from '../../domain/entities/shipping_method.entity';
import { IShippingMethodMapper } from '../../domain/mappers/shipping_method.mapper';
import { IShippingMethodRepository } from '../../domain/repositories/shipping_method.repository';

import crypto from 'crypto';
import { ShippingMethodNotFoundError } from '../errors/shipping_method_not_found.error';

export class ShippingMethodRepository implements IShippingMethodRepository {
  constructor(
    private shippingMethodModel: IAppModel<IShippingMethodEntity>,
    private shippingMethodMapper: IShippingMethodMapper,
  ) {}

  async createShippingMethod(
    createShippingMethodDTO: ICreateShippingMethodDTO,
  ): Promise<IShippingMethodDTO> {
    const shippingMethodEntity: IShippingMethodEntity = {
      id: `shipping_method-${crypto.randomUUID()}`,
      name: createShippingMethodDTO.name,
      defaultMapping: createShippingMethodDTO.defaultMapping,
      mappings: createShippingMethodDTO.mappings ?? [],
      products: createShippingMethodDTO.products ?? [],
      createdAt: new Date(),
    };
    const createdShippingMethod =
      await this.shippingMethodModel.create(shippingMethodEntity);
    return this.shippingMethodMapper.fromEntityToDTO(createdShippingMethod);
  }

  async getAllShippingMethods(): Promise<IShippingMethodDTO[]> {
    const shippingMethods = await this.shippingMethodModel.find();
    return shippingMethods.map((shippingMethod) =>
      this.shippingMethodMapper.fromJsonDataToDTO(shippingMethod),
    );
  }

  async getShippingMethodById(
    shippingMethodId: string,
  ): Promise<IShippingMethodDTO> {
    const shippingMethod =
      await this.shippingMethodModel.findById(shippingMethodId);
    if (!shippingMethod) {
      throw new ShippingMethodNotFoundError();
    }
    return this.shippingMethodMapper.fromJsonDataToDTO(shippingMethod);
  }

  async updateShippingMethod(
    updateShippingMethodDTO: IUpdateShippingShippingMethodDTO,
  ): Promise<IShippingMethodDTO> {
    const currentShippingMethod = await this.shippingMethodModel.findById(
      updateShippingMethodDTO.id,
    );
    if (!currentShippingMethod) {
      throw new ShippingMethodNotFoundError();
    }
    const updatedShippingMethod =
      await this.shippingMethodModel.findByIdAndUpdate(
        updateShippingMethodDTO.id,
        updateShippingMethodDTO,
      );
    return this.shippingMethodMapper.fromJsonDataToDTO(updatedShippingMethod!);
  }

  async deleteShippingMethod(
    shippingMethodId: string,
  ): Promise<IShippingMethodDTO> {
    const deletedShippingMethod =
      await this.shippingMethodModel.findByIdAndDelete(shippingMethodId);
    if (!deletedShippingMethod) {
      throw new ShippingMethodNotFoundError();
    }
    return this.shippingMethodMapper.fromJsonDataToDTO(deletedShippingMethod);
  }
}
