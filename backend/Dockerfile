FROM python:3.7-alpine
EXPOSE 8000
WORKDIR /code
COPY requirements.txt /code
RUN pip3 install -r requirements.txt --no-cache-dir
CMD ["gunicorn", "backend.wsgi", "-b 0.0.0.0:8000"]
