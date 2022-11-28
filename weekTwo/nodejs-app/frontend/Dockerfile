FROM node:lts-alpine as client
WORKDIR /app
COPY package*.json ./
COPY . ./
RUN npm install && npm run build

FROM nginx:stable-alpine
COPY --from=client /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]