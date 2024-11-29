//Reference guide https://www.youtube.com/watch?v=4sR77vaEhy8

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

// Routes
app.get('/api', (req, res) => {
  res.send('Hello World');
});

// Import routes
const usersRoute = require('./routes/users');
app.use('/api/users', usersRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});