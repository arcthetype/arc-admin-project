# build
FROM node:12.13.1-buster-slim as builder
LABEL maintainer="<hrd.candy.dev@gmail.com>"
WORKDIR /app
COPY ./ .
RUN set -eux \
    && npm config set registry https://registry.npm.taobao.org \
    && npm install \
    && npm run build

# deploy
FROM nginx
WORKDIR /sources/arc-admin/
COPY --from=builder /app/dist/ .
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

