import express from 'express';

const app = express();
app.get('/', (req, res) => res.send('Hello from babeljs-project!'));
app.listen(8080);