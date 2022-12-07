FROM node:lts-alpine AS build

WORKDIR /app

COPY ["package*.json", "./"]

RUN npm install

COPY . .

RUN npm run build

# ---

FROM httpd:2-alpine AS deploy

WORKDIR /usr/local/apache2/htdocs/

COPY --from=build /app/build/. ./

EXPOSE 80

CMD [ "httpd", "-D", "FOREGROUND" ]