import { Routes } from '@/interfaces/routes.interface';
import { Request, Response, Router } from 'express';
import UserRoute from './users.route';
import AuthRoute from './auth.route';

export default class IndexRoute implements Routes {
  public path = '/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use(`${this.path}`, new UserRoute().router);
    this.router.use(`${this.path}`, new AuthRoute().router);

    this.router.get(`${this.path}`, this.index);
  }

  private index = (req: Request, res: Response) => {
    res.json({ version: '1.0.0', message: 'Hello World!' });
  };
}
