import { Request, Response } from 'express'

import userCollection from '../repository/userCollection'

import { ErrorRes, SuccessRes } from '../utils/response'
import helpers from '../utils/helpers'

const createUser = helpers.catchAsync(async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body

  const data = { firstName, lastName, email, password }
  const result = await userCollection.create(data)

  SuccessRes(res, { success: 'OK', message: 'User created', data: result })
})

const getUser = helpers.catchAsync(async (req: Request, res: Response) => {
  const { uid } = req.params

  const user = await userCollection.get(uid)
  if (!user) return ErrorRes(res, { error: 'NOT_FOUND', message: 'User not found' })

  SuccessRes(res, { success: 'OK', data: user })
})

const updateUser = helpers.catchAsync(async (req:  Request, res: Response) => {
  const { uid, firstName, lastName, email, password } = req.body

  const user = await userCollection.get(uid)
  if (!user) return ErrorRes(res, { error: 'NOT_FOUND', message: 'User not found' })

  const data = {
    ...firstName && { firstName },
    ...lastName && { lastName },
    ...email && { email },
    ...password && { password }
  }

  const result = await userCollection.update(uid, data)

  SuccessRes(res, { success: 'OK', message: 'User updated', data: result })
})

export default {
  createUser,
  getUser,
  updateUser
}