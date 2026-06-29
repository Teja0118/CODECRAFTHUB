# Use the official Node.js 22 LTS image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the application source code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]