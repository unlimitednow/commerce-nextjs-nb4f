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
    const wishlists = await prisma.wishlist.findMany({
      where: {
        createdBy: userId,
      },
    })

    sites = wishlists.map(
      (wishlist: { id: any; siteName: any; subdomain: any }) => ({
        id: wishlist.id,
        name: wishlist.siteName,
        url: wishlist.subdomain,
      })
    )
  }

  console.log(sites)

  res.status(200).json(sites)
}
