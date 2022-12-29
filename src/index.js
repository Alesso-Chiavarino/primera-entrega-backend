const express = require('express');
const apiRoutes = require('./routers/app.routes');

const PORT = 8080;
const app = express();

//Middlewares
app.use(express.json());  //middleware incorporado
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(PORT, () => console.log('server listening on port: ', PORT));