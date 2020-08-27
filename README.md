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