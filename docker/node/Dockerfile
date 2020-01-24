FROM node:9

LABEL authors="Gievoi Viktor"

RUN npm install -g yarn  @angular/cli@6.1.5
RUN ng set --global packageManager=yarn
RUN chmod +x /usr/local/bin/yarn

WORKDIR /app
