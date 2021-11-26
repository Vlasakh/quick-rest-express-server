import * as express from 'express';
import cors from 'cors';

import './controllers';
import { appRouter } from './routes.decorator';


const app = express();

app.use(cors());
app.use(appRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
