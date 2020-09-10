import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { PORT } from './env';
import schema from './schema/schema';

const app = express();
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const port = 4000 || PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
