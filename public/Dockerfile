FROM node:16-alpine

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . . 

EXPOSE 3000

CMD ["node", "main.js"]
