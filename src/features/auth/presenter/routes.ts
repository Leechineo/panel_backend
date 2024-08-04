import { RouterAdapter } from '../../../core/adapters/router.adapter';
import { authMiddleware } from '../../../core/presenter/middlewares/auth.middleware';
import { AuthRepository } from '../data/repositories/auth.repository';
import { LoginUseCase } from '../data/usecases/login.usecase';
import { UserModel } from '../../../core/presenter/models/user.model';
import { LoginController } from './controllers/login.controller';
import { GetAuthedUserController } from './controllers/get_authed_user.controller';
import { LogoutController } from './controllers/logout.controller';

const authRoutes = new RouterAdapter();

const authRepository = new AuthRepository(UserModel);

authRoutes.post('/login', (req, res) => {
  const loginUseCase = new LoginUseCase(authRepository);
  const loginController = new LoginController(loginUseCase);
  return loginController.handleRequest(req, res);
});

authRoutes.get('/user', authMiddleware(), (req, res) => {
  const getAuthedUserController = new GetAuthedUserController();
  return getAuthedUserController.handleRequest(req, res);
});

authRoutes.post('/logout', authMiddleware(), (req, res) => {
  const logoutController = new LogoutController();
  logoutController.handleRequest(req, res);
});

export default authRoutes;
