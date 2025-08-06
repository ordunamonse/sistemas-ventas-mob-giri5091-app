FROM node:20-alpine As builder


WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --configuration=production

# NGINX
FROM nginx:alpine

# copia archivos construidos
COPY --from=builder /app/dist/sistema-ventas-mob-giri5091-app/browser /usr/share/nginx/html

COPY nginx.conf  /etc/nginx/conf.d/default.conf
