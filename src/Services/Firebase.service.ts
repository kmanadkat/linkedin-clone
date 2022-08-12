import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { firebaseConfig } from '../Constants/firebaseConfig'

const _app = initializeApp(firebaseConfig)
const auth = getAuth(_app)
const db = getFirestore(_app)

export { auth, db }
