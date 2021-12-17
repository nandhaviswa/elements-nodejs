FROM node:16
WORKDIR /home/elements/user
COPY . .
RUN npm install
CMD [ "node", "./bin/www" ]
