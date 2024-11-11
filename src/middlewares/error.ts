import { NextFunction, Request, Response } from 'express'
import { ErrorRes } from '../utils/response'

export interface Err {
  statusCode: number,
  message: string,
  stack: string,
  type: string
}

function errorHandler (err: Err, req: Request, res: Response, _next: NextFunction) {
  const statusCode = err.statusCode || 500
  const { message } = err
  const url = req.originalUrl
  const { method } = req
  const { stack } = err

  // body-parser error
  if (err.type === 'entity.parse.failed') {
    return ErrorRes(res, { error: 'BAD_REQUEST', message: 'The request is not in a valid JSON format.' })
  }

  const reqBody = JSON.stringify(req.body)

  console.error(new Date().toISOString(), `${statusCode} - ${message} - ${url} - ${method} - ${reqBody} - Stack: ${stack}`)

  return ErrorRes(res, { error: 'SERVICE_UNAVAILABLE', message: 'Service unavailable.' })
}

export default errorHandler
