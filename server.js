import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { router } from './routes/turnOn.js'
import cors from 'cors'
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathName = `${__dirname}/views/`

const corsOptions = {
  origin : 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static(pathName));

app.use('/turnOn', router);

app.get('/',cors(corsOptions), function (req, res) {
  res.sendFile(`${path}index.html`)
})

app.listen(port, function () {
  console.log(`Express listening on port ${port}`);
})
