import { getAuth } from "@clerk/nextjs/server";
import prisma from '../../../utils/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

    const sites = await prisma.orders.findMany({
      where: {
        createdBy: userId,
      },
    })

    console.log(sites)

    res.status(200).json(sites)
  }
)
