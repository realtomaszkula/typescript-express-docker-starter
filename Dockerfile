FROM node:boron
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY dist dist
EXPOSE 8080
CMD ["npm", "start"]



