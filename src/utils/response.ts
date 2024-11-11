import { Response } from 'express'

type Result = {
  success?: string,
  error?: string,
  message?: string,
  data?: Record<string,unknown> | Record<string,unknown>[],
  meta?: Record<string,unknown>
}

export const response = (result: Result) => {
  if (result.error) {
    return {
      status: 'error',
      message: result.message ?? null,
      data: null
    }
  } else {
    return {
      status: 'success',
      message: result.message ?? null,
      data: result.data ?? null,
      meta: result.meta ?? undefined
    }
  }
}

type ErrorCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  UPGRADE_REQUIRED: 426,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503
}

const ERROR_CODE: ErrorCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  UPGRADE_REQUIRED: 426,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503
}

type SuccessCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204
}

const SUCCESS_CODE = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204
}
interface SuccessResult {
  success: keyof SuccessCode,
  message?: string,
  data?: Record<string,unknown> | Record<string,unknown>[],
  meta?: Record<string,unknown>
}

export function SuccessRes (res: Response, result: SuccessResult) {
  res.status(SUCCESS_CODE[result.success ?? 'OK']).json(response(result))
}

interface ErrorResult {
  error: keyof ErrorCode,
  message: string
}

export function ErrorRes (res: Response, result: ErrorResult) {
  res.status(ERROR_CODE[result.error ?? 'INTERNAL_SERVER_ERROR']).json(response(result))
}