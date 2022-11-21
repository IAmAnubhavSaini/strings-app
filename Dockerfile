FROM node:16-alpine AS builder
ENV NODE_ENV production
ENV PORT 19000

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production
#RUN yarn install --production

COPY . .

RUN npm run build

# Expose port
EXPOSE 19000

CMD ["npm", "start"]
