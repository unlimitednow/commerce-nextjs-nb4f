import { NextApiResponse, NextApiRequest } from 'next'
import { ServerGetToken } from '@clerk/types'
import prisma from '../../../utils/prisma'
import { requireAuth } from '@clerk/nextjs/api'

interface ClerkRequest extends NextApiRequest {
  auth: {
    userId?: string | null
    sessionId?: string | null
    getToken: ServerGetToken
  }
}

export default requireAuth(async (req: ClerkRequest, res: NextApiResponse) => {
  const userId = req.session.userId

  const sites = await prisma.orders.findMany({
    where: {
      createdBy: userId,
    },
  })

  console.log(sites)

  res.json(sites)
})
