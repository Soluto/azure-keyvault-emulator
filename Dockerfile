FROM node:8-alpine
WORKDIR /service

COPY package.json /service/
RUN yarn

EXPOSE 5000

COPY . /service
CMD node "src/index.js"
