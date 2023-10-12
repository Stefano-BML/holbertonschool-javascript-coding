// server.js
import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

app.use(routes);

export default app;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
