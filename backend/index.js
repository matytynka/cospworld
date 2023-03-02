import express from 'express';
import bodyParser from 'body-parser';
import costumeRouter from './src/routes/costume.route.js';
import userRouter from './src/routes/user.route.js';

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/costumes', costumeRouter);
app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})