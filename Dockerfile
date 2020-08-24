FROM node:14.5.0-alpine3.12
WORKDIR /app

# Handle package.json and lockfile per build
COPY package.json .
COPY package-lock.json .

RUN npm install
COPY . .