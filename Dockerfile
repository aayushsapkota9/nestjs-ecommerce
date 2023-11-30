#build stage
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY  package*.json ./

RUN npm install

COPY . .

