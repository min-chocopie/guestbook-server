#!/bin/bash

echo "prisma migrate..."

# npx prisma migrate dev --name init
npx prisma migrate deploy # dev가 아닌 deploy를 해야 변경사항이 적용됨

npm run start:dev