FROM python:3.12.2-alpine3.19

COPY . /src
WORKDIR /src

RUN ["pip", "install", "-r", "requirements.txt"]
RUN ["python","manage.py", "migrate"]

ENTRYPOINT [ "python", "manage.py", "runserver"]

CMD [ "0.0.0.0:8000" ]

EXPOSE 8000