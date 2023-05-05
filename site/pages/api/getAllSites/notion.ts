import { getAuth } from '@clerk/nextjs/server'
import prisma from '../../../utils/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Site = {
  id: number
  name: string
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req)

  let sites: Site[] = []

  if (userId) {
    const wishlist = await prisma.wishlist.findMany({
      where: {
        createdBy: userId,
      },
    })

    sites = wishlist.map((wishlist: { id: any; name: any; url: any }) => ({
      id: wishlist.id,
      name: wishlist.name,
      url: wishlist.url,
    }))
  }

  console.log(sites)

  res.status(200).json(sites)
}
