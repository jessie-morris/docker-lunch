# Docker Lunch

## Activity

Lets use docker to build a N-tier webapp with proper networking.  Lets also talk about some cool ways to interface with docker.


### Advanced Docker

* Sometimes you may need to launch a docker from inside of a docker.  This is typically performed by volume mounting the unix socket running at /var/run/docker.sock  This is typically considered a dangerous setup and should not be performed on production environments.  Whoever (including a user inside your container) can control this socket and the docker daemon typically has near root access to the machine.

Example:

docker run -u root -v /var/run/docker.sock:/var/run/docker.sock jenkins:lts bash

