FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --force
COPY . .

EXPOSE 8080
CMD [ "node", "dist/main.js" ]