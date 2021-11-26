import { Request, Response } from 'express';
import RoutesDecorator from '../routes.decorator';
export class Users {
  @RoutesDecorator({
    path: '/',
    method: 'get'
  })
  getUsers(req: Request, res: Response) {
    res.send('Typescript Decorators are awesome !!!');
  }
}
