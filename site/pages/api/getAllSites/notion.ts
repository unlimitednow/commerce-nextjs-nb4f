import { getAuth } from '@clerk/nextjs/server'
import prisma from '../../../utils/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req)

  let sites
  if (userId) {
    sites = await prisma.wishlist.findMany({
      where: {
        createdBy: userId,
      },
    })
  } else {
    sites = []
  }

  console.log(sites)

  res.status(200).json(sites)
}
