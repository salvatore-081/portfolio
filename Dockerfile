FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:1.30-alpine
# Correzioni di Alpine uscite dopo l'ultima ricostruzione di nginx:1.30-alpine: l'aggiornamento
# notturno sul server (ovh-aggiorna) ricostruisce senza cache quando ce ne sono di nuove
RUN apk upgrade --no-cache
COPY --from=build /app/dist /usr/share/nginx/html
