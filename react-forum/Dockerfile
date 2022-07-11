FROM alpine:3.19

ENV HOST=0.0.0.0

RUN apk add --update nodejs npm 

COPY . /src
WORKDIR /src

RUN ["npm", "i"]

ENTRYPOINT [ "npm", "start" ]

EXPOSE 3000
