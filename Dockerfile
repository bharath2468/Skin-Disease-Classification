FROM python:3.8-slim-buster

WORKDIR /app

COPY . /app
RUN pip install -r requirements.txt

CMD gunicorn -w 4 -b 0.0.0.0:5000 app:app