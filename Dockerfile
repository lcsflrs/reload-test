# syntax=docker/dockerfile:1

# Deps
FROM node:14-alpine AS deps

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

ADD start.sh /start.sh
RUN chmod 755 /start.sh
CMD ["/start.sh"]