import { v4 as uuidv4 } from 'uuid'

import db from '../services/firebase/firestore'
import { IUser, IUserCreate, IUserUpdate } from '../entities'

const create = async (data: IUserCreate): Promise<IUser> => {
  const uid = uuidv4()
  const userRef = db.collection('users').doc(uid)
  await userRef.set({ uid, ...data })
  return { uid, ...data }
}

const get = async (uid: string) => {
  if (!uid) throw new Error('uid is required')
  const userRef = db.collection('users').doc(uid)
  const user = await userRef.get()
  return user.data() as IUser
}

const update = async (uid: string, data: IUserUpdate): Promise<IUser> => {
  if (!uid) throw new Error('uid is required')
  const userRef = db.collection('users').doc(uid)
  await userRef.update(data)
  const updated = await get(uid)
  return updated
}

export default {
  create,
  get,
  update
}