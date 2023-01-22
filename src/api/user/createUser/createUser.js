export default {
  Mutation: {
    createUser: async (_, args, { prisma }) => {
      const { name, email } = args;

      try {
        const userExists = await prisma.user.findUnique({ where: { email: email }});

        if (!userExists) {
          const user = await prisma.user.create({
            data: { name: name, email: email },
          })
          return user.id;
        } else {
          return '[!] 존재하는 이메일입니다.';
        }
      } catch(e) {
        throw Error(e);
      }
    }
  }
}