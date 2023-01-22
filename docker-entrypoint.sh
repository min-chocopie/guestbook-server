#!/bin/bash

echo "prisma migrate..."

npx prisma migrate dev --name init

npm run start:dev