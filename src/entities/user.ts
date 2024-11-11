export type IUser = {
  uid: string
  firstName: string
  lastName: string
  email: string
  password: string
}

export type IUserCreate = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type IUserUpdate = {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
}