# Docker Lunch

## Nomenclature

* Image - A docker image is an immutable file which represents a snapshot of a container.  This can be used to spawn containers at will.
* Container - A docker container is an ephemeral mutable instance of a docker image.  Unless otherwise specified any state changes from within a running container are lost when this container is destroyed.
* Host - I typically use host to refer to the machine in which the docker daemon is running.
* Docker Daemon - The background service which supervises docker.  It can be communicated with over a TCP socket.

## Activity

Lets use docker to build a N-tier webapp with proper networking.  Lets also talk about some cool ways to interface with docker.


### Advanced Docker

* It is important to chain many commands such as RUN together as layers are created for each RUN command and previous cached layers (like apt-get update) which provide different results temporily can lead to unexpected behavior

* You can expose the docker daemon over a network and then access it using the -H flag on your client(or set the DOCKER_HOST environment variable).  Since access to the daemon provides significant privledge, you will want to secure this with TLS.

* Sometimes you may need to launch a docker from inside of a docker.  This is typically performed by volume mounting the unix socket running at /var/run/docker.sock  This is typically considered a dangerous setup and should not be performed on production environments.  Whoever (including a user inside your container) can control this socket and the docker daemon typically has near root access to the machine.

Example:

docker run -u root -v /var/run/docker.sock:/var/run/docker.sock jenkins:lts bash
docker run -v someVirus.sh -v /:/rootedHostFS ubuntu:lts someVirus.sh

