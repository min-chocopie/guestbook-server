export default {
  Query: {
    readAllLog: async (_, __, { prisma }) => {
      try {
        const logs = await prisma.visitLog.findMany();
        
        return logs;
      } catch(e) {
        throw Error(e);
      }
    }
  }
}