# Docker-info
A project that houses various docker related information - definitions, codes, etc.

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
docker run <image_tag>demy

```