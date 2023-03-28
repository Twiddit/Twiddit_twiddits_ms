FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --legacy-peer-deps

COPY . .

EXPOSE 8080
CMD [ "node", "dist/main.js" ]