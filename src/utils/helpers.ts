import { NextFunction, Request, Response } from 'express' 

export interface ControllerRequestType extends Request {
  userUid?: string
}

type AsyncMiddleware = (req: Request, res: Response, next?: NextFunction) => Promise<Response | void>;

const catchAsync = (fn: AsyncMiddleware) => {
  return (req: ControllerRequestType, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

export default {
  catchAsync

}