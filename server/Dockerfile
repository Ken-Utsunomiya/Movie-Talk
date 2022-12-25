FROM node:18.12-alpine

WORKDIR '/server'

COPY package.json .
RUN yarn install
COPY . .

EXPOSE 5000

CMD ["yarn", "run", "dev"]
