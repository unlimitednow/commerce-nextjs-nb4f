import { requireAuth } from '@clerk/nextjs/api'
import prisma from '../../../utils/prisma'

export default requireAuth(async (req, res) => {
  const { userId } = req.auth

  const sites = await prisma.orders.findMany({
    where: {
      createdBy: userId,
    },
  })

  console.log(sites)

  res.status(200).json(sites)
})
