FROM nginx:1.15.0-alpine

RUN mkdir -p /app
ADD ./config/app.conf /etc/nginx/conf.d/default.conf
COPY ./dist ./app

WORKDIR /app