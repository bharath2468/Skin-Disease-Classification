FROM python:3.8-slim-buster

RUN apt update -y && apt install awscli -y

WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt

FROM node:16 AS build-react

COPY front-end/package.json front-end/package-lock.json ./
RUN npm install

COPY front-end/ ./
RUN npm run build

WORKDIR /app

EXPOSE 3000
EXPOSE 8080

CMD ["python3", "app.py"]
