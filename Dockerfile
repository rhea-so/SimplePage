FROM node:10
MAINTAINER JeongHyeon Kim <gameboy5141@gmail.com>
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]