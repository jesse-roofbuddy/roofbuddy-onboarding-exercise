import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    menuItems: async () => {
      return await prisma.menuItem.findMany();
    },
  },
};
