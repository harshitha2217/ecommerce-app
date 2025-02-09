FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the app port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
