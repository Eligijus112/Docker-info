# Base image
FROM python:alpine

# Making the working directory the /app directory
WORKDIR /app 

# Copying the script to the container
COPY ./hello.py ./ 

# Running the script
CMD ["python", "hello.py"]