FROM node:22-bookworm AS base

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS dev-server
WORKDIR /app
VOLUME /app

CMD npm install && npm run dev


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .


RUN npm run build

FROM ghcr.io/static-web-server/static-web-server:2.36.0 AS static-server

WORKDIR /srv/http
ENV SERVER_ROOT=/srv/http

#COPY --from=builder /app/public ./public

# https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
COPY --from=builder /app/out ./

