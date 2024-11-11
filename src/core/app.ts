import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'

import config from '../configs/index'
import errorHandler, { Err } from '../middlewares/error'
import route from '../routes/userRoutes'

// EXPRESS
const app: Application = express()
const port = config.port
app.set('trust proxy', true)
// LOGGER
if (config.env !== 'production') app.use(morgan('dev'))

// I/O
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// HEADER HELMET
app.use(helmet())

// ROUTES
route(app)

// ERROR HANDLER
app.use((err: Err, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next)
})

export function bootstrap () {
  app.listen(port, () => {
    console.info(`${new Date().toISOString()} Server running at http://localhost:${port}`)
  })
}

export default app
