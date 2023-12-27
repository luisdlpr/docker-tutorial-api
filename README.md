cli: docker ps lists running containers

Dockerfile : define dependencies and run commands for service
- only one CMD per dockerfile
- docker hub to see base images

.dockerignore : like git ignore

cli: docker build -t luisdlpr/name:v .
cli: docker run -p local:container imageid
cli: docker exec -it containerID /bin/sh to access terminal

volume: dedicated folder on host machine for file storage

cli: docker volume create shared-stuff
docker run --mount source=shared-stuff,target=/stuff

dockercompose: orchestrate multiple containers / services
docker-compose.yml -
version: '3'
services:
  web:
    build:
    ports:
      - "6000:8080"
  db:
    image: "mysql"
    environment:
      MYSQL_ROOT_PASSWORD: password
    volumes:
      - db-data:/foo

volumes:
  db-data:

cli: docker-compose up
cli: docker-compose down
