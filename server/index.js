import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import { DB_CONNECTION, PORT } from './env';
import schema from './schema/schema';

mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Conncted to the database'));

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const port = 4000 || PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
