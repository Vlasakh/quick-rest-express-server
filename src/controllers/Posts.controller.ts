import { Request, Response } from 'express';
const path = require('path');
const fs = require('fs');

import RoutesDecorator from '../routes.decorator';

export class Posts {
  @RoutesDecorator({
    path: '/posts',
    method: 'options',
  })
  getPostsOption(req: Request, res: Response) {
    let content = require(path.join('../../data', 'posts.json'));

    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', '*');
    res.append('Access-Control-Allow-Headers', '*');

    res.send(content);
  }

  @RoutesDecorator({
    path: '/posts',
    method: 'get',
  })
  getPosts(req: Request, res: Response) {
    let content = require(path.join('../../data', 'posts.json'));

    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', '*');
    res.append('Access-Control-Allow-Headers', '*');


    res.send(content);
  }
}

