FROM python:3.9
#
WORKDIR /code
COPY requirements.txt /code
#RUN apt update && apt install -y \
#    build-essential \
#    gcc
RUN pip3 install -r requirements.txt --no-cache-dir
#CMD ["gunicorn", "backend.wsgi", "-b 0.0.0.0:8000"]
#CMD ["uwsgi", "--ini", "backend/wsgi.ini"]
