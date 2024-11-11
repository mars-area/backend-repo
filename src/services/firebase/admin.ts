import admin from 'firebase-admin'

import getFirebaseConfig from '../../configs/firebaseConfig'

const app = admin.initializeApp({ credential: admin.credential.cert(getFirebaseConfig()) })

export default app