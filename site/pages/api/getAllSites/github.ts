import { withAuth } from '@clerk/nextjs/api'
import prisma from '../../../utils/prisma'

export default withAuth(
  async (
    req: { auth: { userId: any } },
    res: {
      status: (arg0: number) => {
        (): any
        new (): any
        json: { (arg0: any): void; new (): any }
      }
    }
  ) => {
    const { userId } = req.auth

    const sites = await prisma.orders.findMany({
      where: {
        createdBy: userId,
      },
    })

    console.log(sites)

    res.status(200).json(sites)
  }
)
