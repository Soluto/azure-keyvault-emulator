FROM node:8-alpine
WORKDIR /service

COPY package.json /service/
RUN yarn

EXPOSE 4000

COPY . /service
CMD node "src/index.js"
