import bcrypt from 'bcrypt';


export default {
  Mutation: {
    createLog: async (_, args, { prisma }) => {
      const { name, password, comment } = args;

      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const visitLog = await prisma.visitLog.create({
          data: { name: name, password: hashedPassword, comment: comment }
        })

        return visitLog;
      } catch(e) {
        throw Error(e);
      }
    }
  }
}