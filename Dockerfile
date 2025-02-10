FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY server/ ./server/
COPY public/ ./public/
RUN npm install
RUN npm run build
# Exibe a estrutura gerada para debug (pode remover depois)
RUN ls -R /app/dist
EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000
CMD ["node", "dist/server/server.js"] 