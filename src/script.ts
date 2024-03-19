"use client"
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


export async function main() {
  const data = await prisma.complaint.findMany()
  return {
    props: {
      data
    }
  }


}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e: any) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

