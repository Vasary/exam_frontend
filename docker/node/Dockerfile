FROM node:9

LABEL authors="Gievoi Viktor"

RUN npm install -g yarn
RUN yarn global add @angular/cli
RUN ng set --global packageManager=yarn

WORKDIR /app