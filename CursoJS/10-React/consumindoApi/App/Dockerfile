FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /home/app

COPY ["package.json","package-lock.json", "./"]

RUN npm install

COPY . .

CMD [ "npm", "start" ]