import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { InvalidUserIdError } from '../../../user/data/errors/invalid_user_id.error';
import { IFindUserAddressesUseCase } from '../../domain/usecases/find_user_addresses.usecase';

export class GetUserAddressesController extends AppController {
  constructor(private findUserAddressesUseCase: IFindUserAddressesUseCase) {
    super();
  }

  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    const { page, limit, searchQuery } = req.query;

    if (typeof id !== 'string') {
      throw new InvalidUserIdError();
    }
    const paginatedAddresses = await this.findUserAddressesUseCase.exec(id, {
      pagination: {
        page,
        limit,
      },
      searchQuery,
    });
    return res.send(200, paginatedAddresses);
  }
}
