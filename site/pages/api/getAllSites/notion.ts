import { NextApiRequest, NextApiResponse } from 'next'
import { requireAuth } from '@clerk/nextjs/api'
import prisma from '../../../utils/prisma'

interface ClerkRequest extends NextApiRequest {
  session: {
    userId: string
  }
}

export default requireAuth(async (req: ClerkRequest, res: NextApiResponse) => {
  const userId = req.session.userId

  const sites = await prisma.wishlist.findMany({
    where: {
      createdBy: userId,
    },
  })

  console.log(sites)

  res.json(sites)
})
