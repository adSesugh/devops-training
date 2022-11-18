FROM ubuntu

# Set working directory
WORKDIR /app

ADD requirements.txt ./

RUN apt-get update -y && apt-get install python3

RUN pip install ./requirements.txt

COPY . /app/

CMD ["python3", "main.py"]
