import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Gabriel Desidério',
    email: 'gabrieldesd7@gmail.com',
  },
})
