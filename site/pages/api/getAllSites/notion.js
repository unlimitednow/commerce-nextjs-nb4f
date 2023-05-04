import { requireAuth } from '@clerk/nextjs/api'

export default requireAuth(async (req, res) => {
  const { userId } = req.auth
  // Load any data your application needs for the API route
  res.status(200).json({ data })
})
