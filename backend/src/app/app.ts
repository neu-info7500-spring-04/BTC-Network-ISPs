import express from 'express';
import cors from 'cors';
import routes from '../router/routes';

const app: express.Application = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`backend server is listening on port ${port}`);
});