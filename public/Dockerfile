FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json first (package-lock.json is missing, so we don't copy it)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the app port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
