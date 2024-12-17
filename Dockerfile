FROM node:18-alpine
COPY server.js /usr/src
# RUN npm install express
EXPOSE 4000
CMD node server.js
