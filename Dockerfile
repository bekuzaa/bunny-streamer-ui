ARG NODE_IMAGE=node:21-alpine3.20
ARG CADDY_IMAGE=caddy:2.8.4-alpine

FROM $NODE_IMAGE AS builder

ENV PUBLIC_URL="./"

# Install necessary packages and configure npm for better network resilience
RUN apk add --no-cache git && \
	npm config set fetch-retry-mintimeout 20000 && \
	npm config set fetch-retry-maxtimeout 120000 && \
	npm config set fetch-retries 5

COPY . /ui

WORKDIR /ui

# Use npm instead of yarn for better network resilience
RUN cd /ui && \
	npm install --legacy-peer-deps --no-audit --no-fund && \
	npm run build

FROM $CADDY_IMAGE

COPY --from=builder /ui/build /ui/build
COPY --from=builder /ui/Caddyfile /ui/Caddyfile

WORKDIR /ui

EXPOSE 3000

CMD [ "caddy", "run", "--config", "/ui/Caddyfile" ]
