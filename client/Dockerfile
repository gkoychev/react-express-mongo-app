FROM node:12.16.0

WORKDIR /usr/src/app

COPY . .

RUN yarn global add react-scripts

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
