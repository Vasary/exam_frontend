FROM nginx:1.16.1-alpine

RUN mkdir -p /application

ADD ./config/app.conf /etc/nginx/conf.d/default.conf

COPY ./dist ./application

WORKDIR /application
