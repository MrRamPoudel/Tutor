FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#nextjs
EXPOSE 3000

CMD ["npm", "run", "dev"]