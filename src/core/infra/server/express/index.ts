import 'dotenv/config';

import express, { Express } from 'express';
import userRoutes from '../../../../features/user/presenter/routes';
import authRoutes from '../../../../features/auth/presenter/routes';
import fileRoutes from '../../../../features/file/presenter/routes';
import addressRoutes from '../../../../features/address/presenter/routes';
import stockRoutes from '../../../../features/stock/presenter/routes';
import brandRoutes from '../../../../features/brand/presenter/routes';
import shippingMethodRoutes from '../../../../features/shipping_method/presenter/routes';
import productRoutes from '../../../../features/product/presenter/routes';
import settingRoutes from '../../../../features/setting/presenter/routes';
import cors from 'cors';

const app: Express = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.use('/users', userRoutes.router);
app.use('/auth', authRoutes.router);
app.use('/files', fileRoutes.router);
app.use('/addresses', addressRoutes.router);
app.use('/stocks', stockRoutes.router);
app.use('/brands', brandRoutes.router);
app.use('/shipping_methods', shippingMethodRoutes.router);
app.use('/products', productRoutes.router);
app.use('/settings', settingRoutes.router);

app.listen(port, () => console.log(`App running at port ${port}`));
