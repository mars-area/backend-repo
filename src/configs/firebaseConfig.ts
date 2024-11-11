import fs from 'fs'
import path from 'path'

import config from './index'

function getFirebaseConfig () {
  let credPath = ''
  switch (config.env) {
    case 'production':
      break
    default:
      credPath = '../../credentials/firebase-admin-sdk.json'
      break
  }

  const serviceAccount = JSON.parse(fs.readFileSync(path.join(__dirname + credPath), 'utf8'))
  return serviceAccount
}

export default getFirebaseConfig