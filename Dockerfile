FROM node:14.18.0

ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

ADD . .
RUN yarn install
RUN yarn build
EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]
