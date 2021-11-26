import * as express from 'express';

import './controllers';
import { appRouter } from './routes.decorator';

const cors = require('cors');

const app = express();

app.use(cors());
app.use(appRouter);

app.listen(3334, () => {
  console.log('Server is running on port 3000');
});
