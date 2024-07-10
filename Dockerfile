# Base image for building dependencies
FROM node:lts AS builder

# Set working directory
WORKDIR /app

# Install npm dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source code
COPY . .

# Build the Next.js application
RUN npm run build

# Production image
FROM node:lts as runner

# Set working directory
WORKDIR /app

# Environment variables
ENV NODE_ENV production

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

# Ensure all static files are accessible
COPY public /app/public

# Next.js server runs on port 3000 by default
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]