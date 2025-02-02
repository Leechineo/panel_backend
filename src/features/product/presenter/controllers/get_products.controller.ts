import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetProductsUseCase } from '../../domain/usecases/get_products.usecase';

export class GetProductsController extends AppController {
  constructor(private getProductsUseCase: IGetProductsUseCase) {
    super();
  }

  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const { page, limit, searchQuery } = req.query as {
      page?: number;
      limit?: number;
      searchQuery?: string;
    };

    const paginatedProducts = await this.getProductsUseCase.exec({
      pagination: {
        limit: limit ?? 10,
        page: page ?? 1,
      },
      searchQuery: searchQuery ?? '',
    });

    return res.send(200, paginatedProducts);
  }
}
