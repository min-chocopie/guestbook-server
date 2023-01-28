import bcrypt from 'bcrypt';


export default {
  Mutation: {
    deleteLog: async (_, args, { prisma }) => {
      const { id, password } = args;

      try {
        const visitLog = await prisma.visitLog.findUnique({ 
          where: { id: id }
        })

        if (visitLog) {
          const checkPassword = await bcrypt.compare(password, visitLog.password);
          if (checkPassword) {
            await prisma.visitLog.delete({
              where: { id: id }
            })
            
            return '삭제되었습니다.'
          } else {
            return '[!] 비밀번호를 다시 입력해주세요.'
          }
        } else {
          return '[!] 존재하지 않는 방명록입니다.'
        }
      } catch(e) {
        throw Error(e);
      }
    }
  }
}