const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const schema = require('./schema');

dotenv.config();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log('server is running.'))