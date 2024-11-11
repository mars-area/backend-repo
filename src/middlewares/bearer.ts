'use strict'

import { NextFunction, Request, Response } from 'express'
import config from '../configs/index'
import helpers from '../utils/helpers'
import { ErrorRes } from '../utils/response'

interface BearerRequest extends Request {
  ipAddress?: string
}

const bearer = helpers.catchAsync(async (req: BearerRequest, res: Response, next: NextFunction | undefined) => {
  const bearerHeader = req.headers.authorization as string | undefined
  const bearerToken = bearerHeader?.split(' ')[1]

  if (!bearerToken) {
    return ErrorRes(res, { error: 'UNAUTHORIZED', message: 'Missing required headers.' })
  }

  if (bearerToken !== config.bearer_token) {
    return ErrorRes(res, { error: 'UNAUTHORIZED', message: 'Invalid token.' })
  }

  if (next) next()
})

export default bearer
