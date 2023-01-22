export default {
  Query: {
    readAllUser: async (_, __, { prisma }) => {
      try {
        const users = await prisma.user.findMany();

        return users;
      } catch(e) {
        throw Error(e);
      }
    }
  }
}