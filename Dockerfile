# Use Node.js 18
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files from client directory
COPY client/package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps --no-audit --no-fund

# Copy source code from client directory
COPY client/ .

# Build the app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]




