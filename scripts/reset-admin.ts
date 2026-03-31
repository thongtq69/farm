import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function resetAdmin() {
  const payload = await getPayload({ config: configPromise })
  
  const users = await payload.find({
    collection: 'users',
  })
  
  if (users.totalDocs > 0) {
    const admin = users.docs[0]
    await payload.update({
      collection: 'users',
      id: admin.id,
      data: {
        password: 'password123',
      },
    })
    console.log(`Reset password for email: ${admin.email}`)
    console.log(`New password: password123`)
  } else {
    const newUser = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@farm.com',
        password: 'password123',
      },
    })
    console.log(`Created new admin email: admin@farm.com`)
    console.log(`New password: password123`)
  }
  
  process.exit(0)
}

resetAdmin()
