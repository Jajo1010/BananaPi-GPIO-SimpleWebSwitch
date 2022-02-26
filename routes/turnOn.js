import express from 'express'
import { turnOn } from '../models/turnCommand.js'
import cors from 'cors'
const router = express.Router()

const corsOptions = {
  origin: ['http://localhost:8080', 'http://192.168.1.129:8080'],
  optionsSuccessStatus: 200
}


router
  .route('/')
  .get(cors(corsOptions), (req, res) => {
    res.sendStatus(200)
  })
  .post(cors(corsOptions), async (req, res) => {
    const result = await turnOn()
    try {
      res.send(result);
      console.log(result)
    }catch (error){
      console.log(error)
    }
 })

export { router }
