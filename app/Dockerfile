#FROM node:18-alpine
#WORKDIR /app
#COPY package.json .
#RUN npm install
#COPY app.js .
#EXPOSE 8080
#CMD ["npm", "start"]


# ---------- Stage 1: Build ----------
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY app.js .

# ---------- Stage 2: Runtime ----------
FROM gcr.io/distroless/nodejs18-debian11
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 8080
CMD ["app.js"]
