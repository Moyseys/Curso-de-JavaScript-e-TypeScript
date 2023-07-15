FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /home/api

COPY ["package.json","package-lock.json", "./"]

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]