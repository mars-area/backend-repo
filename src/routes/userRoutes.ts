import { Application, Router } from 'express'

import api from '../controllers/api'

import bearer from '../middlewares/bearer'

import { ErrorRes } from '../utils/response'

const userRouter = Router()
userRouter.post('/create', api.createUser)
userRouter.get('/:uid', api.getUser)
userRouter.put('/:uid', api.updateUser)

function route (app: Application) {
  app.use(bearer)

  // User
  app.use('/user', userRouter)

  // catch 404 and forward to error handler
  app.use((_req, res, _next) => {
    ErrorRes(res, { error: 'NOT_FOUND', message: 'No route found.' })
  })
}

export default route