const express = require('express');
const bodyParser = require('body-parser');
const costumeRouter = require('./src/routes/costume.route');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/costumes', costumeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})