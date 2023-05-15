FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#nextjs
EXPOSE 3000

#node server
EXPOSE 3001 

#TODO: needs to run npm run server to start the server
CMD ["npm", "run", "dev"]