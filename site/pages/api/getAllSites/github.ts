import { getAuth } from '@clerk/nextjs/server'
import prisma from '../../../utils/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Site = {
  // define the structure of the Site object here
  // for example:
  id: number
  name: string
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req)

  let sites: Site[] = [] // add a type annotation to the sites variable

  if (userId) {
    sites = await prisma.orders.findMany({
      where: {
        createdBy: userId,
      },
    })
  }

  console.log(sites)

  res.status(200).json(sites)
}
