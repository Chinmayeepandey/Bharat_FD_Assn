FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Copy Google Translate JSON Key
COPY src/config/translation-api-key.json /app/src/config/translation-api-key.json

EXPOSE 8000

CMD ["node", "src/app.js"]
