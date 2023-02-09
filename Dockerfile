FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./

RUN npm install

COPY . .

EXPOSE 8000

ENTRYPOINT [ "sh", "docker-entrypoint.sh" ]