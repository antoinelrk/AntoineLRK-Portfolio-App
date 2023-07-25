FROM alpine:3.17

RUN mkdir -p /usr/src/react-app
WORKDIR /usr/src/react-app

RUN apk add --update --no-cache \
tzdata \
bash \
nodejs \
npm

ENV TZ Europe/Paris

COPY ./ /usr/src/react-app

ENTRYPOINT ["/bin/bash", "run.sh"]