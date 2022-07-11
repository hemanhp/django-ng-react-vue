FROM node:18-alpine3.19

COPY . /src
WORKDIR /src

RUN ["npm", "i"]

ENTRYPOINT [ "./node_modules/.bin/ng", "serve","--host", "0.0.0.0", "--disable-host-check" ]

EXPOSE 4200
