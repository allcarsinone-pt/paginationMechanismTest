FROM node:18.18.0-alpine

RUN apk update
RUN apk upgrade
RUN apk add bash

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["./entrypoint.sh"]