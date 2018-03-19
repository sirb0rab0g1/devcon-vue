FROM node:8.9.4

RUN mkdir /vue-davao-js

COPY package.json /vue-davao-js

WORKDIR /vue-davao-js

RUN npm install

COPY . /vue-davao-js

ENV HOST 0.0.0.0