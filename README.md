# Application development with docker

A project that houses various docker related information - definitions, codes, etc.

Additionaly, technologies like redis, node.js, python are also present in the project.

# Applications 

## simple-container

Running the application:

```
sudo docker build -t simple-app ./simple-container

sudo docker run simple-app
```

The output is just a simple "Hello from the container"

## double-container

Running the application 

```
cd double-container 

sudo docker-compuse up --build
```

The application stores the n-2 and n-1 members of the Fibonacci sequence and calculates the n-th member. 

With each refresh of the page, the next member is calculated.

To view the results go to **localhost:8000**. 

# Frontend commands

The main technology to manage frontend that will be used in this project is node.js. 

Node.js is an open source server environment and is completely free.

For managing frontend a user can use the npm (node package manager) command to download, update, delete, deploy frontend packages. 

```
sudo apt install node

sudo apt install npm 
```

## npm run start 

Starts the development server.

## npm run test 

Runs tests associated with the project.

## npm run build 

Builds a production version of the application.

# Docker commands 

## run

Running a conainer from an image 

```
docker run <image_name>
```

Running a default commmand from a docker container

```
docker run <image_name> <command>
```

The docker run command is actually made up of two additional commands: 

```
docker run = docker create + docker start
```

We can explicitly call these commands like 

```
docker create <image_name>
```

```
docker start <container_id>
```

## ps

Listing all the running containers

```
docker ps --all
```

## stop and kill

Stopping a container:

```
docker stop <container_id>
```

Killing a container

```
docker kill <container_id>
```

## logs

The logs in a container can be accessed using the command

```
docker logs <container_id>
```

## Executing commands in the container

```
docker exec -it <container_id> <command>
```

Equivalent to 

```
docker exec -i -t <container_id> <command>
```

The -i flag links a user's terminal to the docker STDIN channel. This means that everything a user types in his terminal get inputed to the docker container.

The -t flag ensures that everything a user types shows up in a nicely mannered way in the console. 

## Getting a command prompt in a container

```
docker exec -it <container_id> sh
```

The **sh** (along **bash**, **powershell**, **zsh** and others) are command processors. They let users execute commands to the software using a command prompt.

# Images

To create an image we need a **Dockerfile**. It is a special configurations file defining how the containers created by a given image behave.

The flow is the following:

```
Dockerfile -> Docker Client -> Docker server -> Usable image
```

## Dockerfile flow 

The flow of most dockerfiles is the following: 

```
Specify base image -> Run some commands to install additional programs -> Specify a command to run on container startup
```

## Dockerfile and its components 

The file that docker uses is called **Dockerfile** (without any extensions). A simple example that can be used as a template for other docker files:

```
# Use existing docker image as a base 
FROM alpine

# Donwloading and updating dependencies
RUN apk add --update redis

# What to do on startup of container
CMD ["redis-server"]
```

The keywords FROM, RUN, CMD, etc are called instructions and everything to the right of those keywords are called arguments.

To build a container using a dockerfile the following command is needed:

```
docker build .
```

The **.** defines the context where to look for the dockerfile. Usually it is the same directory as you are typing the commands in.

## Tagging 

In order to tag a specific image that is built using a dockerfile a user can use the -t flag:

```
docker build -t <image_tag> . 
```

After this build, to run a container a user can use not the unique id but the image tag name.

```
docker run <image_tag>

```

# Copying build files to container

When building an image, usually we want some files from our local computer to be copied to the container. To do this, in the dockerfile, 
we can use the COPY command:

```
COPY ./ ./
```

The first **./** is a path to files on the local machine relative to the build index. 

The second **./** is a path where the files will be placed inside the container.

# Ports in docker 

The definition of a port in computer science is the following: 

*A port is a communication endpoint.* 

Ports are identified for each protocol and address combination by 16-bit unsigned numbers. For example, :20, , :3000, :8080, etc.

We can visualize a port as a somewhat API endpoint. We can have access to that endpoint and get some information back or we cannot.

When a user created a docker container, the container can reach out to the outter world freely (like downloading packages) but to access the container, we need to explicitly route the port numbers of the local machine and the open port numbers in the docker container. 

To run docker containers with port mappings we use the following template:

```
docker run -p <incoming_port> : <container_port> <image_id>
```

<incoming_port> - the port number of incoming requests from local machine.

<container_port> - port number inside the container. 

Example:

```
docker run -p 8080:8080 myimage
```

# Specifying a working directory in the container

In the dockerfile we can specify the working directory where the files will be copied and all the commands executed. The kyeword for that is WORKDIR:

```
# Makes the working directory the usr default directories' /app folder
WORKDIR /usr/app/
```

If any directory is not present in the container, docker will create it.

# Docker compose

To install docker-compose on your machine use the command:

```
sudo apt install docker-compose
```

Docker compose is used mainly to work with multiple containers and set up networking between them. It saves a lot of typing out commands using the docker-cli. 

All the commands for docker-compose is stored in the file **docker-compose.yml.**

## Building, running and stopping containers 

Building containers:

```
# Dockerfile example
docker build .
<=>
# Docker-compose example
docker-compose build
```

Running containers:

```
# Dockerfile example
docker run <myimage> 
<=> 
# Docker-compose example
docker-compose up
```

Stopping all containers

```
docker-compose down 
# OR 
docker-compose stop
```

More commands and examples with python: 

https://docs.docker.com/compose/django/

# Restart policies 

**"no"** - never restart containers under no circumstances.

**always** - if the container stops **for any reason** restart it.

**on-failure** - only restart when the container exits with an error code.

**unless-stopped** - always restart unless the developer stops it.

To set up the restart policies in the docker-compose.yml file use the keyword **restart**.

# Docker volumes

Volumes are stored in a part of the host filesystem which is managed by Docker (/var/lib/docker/volumes/ on Linux). Non-Docker processes should not modify this part of the filesystem. Volumes are the best way to persist data in Docker.

Docker volumes are used as references for files on the local machine so as to any change made to any of the files on the local machine gets immedeatly changed in the docker container.

The command to create a volume alongside a container is rather cumbersome: 

```
docker run -p 3000:300 -v /app/node_modules -v $(pwd):/app <image_id>
```

# Nginx in docker 

