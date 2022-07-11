FROM nginx:stable-alpine3.19

RUN apk add --update nodejs npm 

COPY . /src
WORKDIR /src

RUN ["npm", "i"]

RUN ["npm", "run", "build"]

RUN cp -r ./dist/* /usr/share/nginx/html
