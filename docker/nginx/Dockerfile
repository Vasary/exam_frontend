FROM nginx:latest

RUN mkdir -p /app
ADD ./config/app.conf /etc/nginx/conf.d/default.conf

WORKDIR /app