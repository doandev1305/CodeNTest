FROM node:14.20.0
RUN apt-get -y update && apt-get -y upgrade && apt-get install -y --no-install-recommends ffmpeg
RUN mkdir -p /code-no-test
WORKDIR /code-no-test
COPY . .
RUN yarn install
# EXPOSE 80
CMD ["yarn", "start"]
