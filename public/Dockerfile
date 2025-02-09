FROM node:16-alpine
WORKDIR /app

# Copy package.json from the parent directory
COPY ../package.json ../package-lock.json ./

RUN npm install

# Copy everything else
COPY .. .

EXPOSE 3000
CMD ["npm", "start"]

