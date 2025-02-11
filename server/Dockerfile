# Use Node.js Alpine image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
