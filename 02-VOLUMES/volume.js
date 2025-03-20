// THIS COMMAND WILL CREATE A VOLUME 
docker volume create sample

//THIS WILL LIST ALL VOLUMES IN DOCKER
docker volume ls

// THIS COMMAND WILL INSPECT OUR CREATED VOLUME 
docker volume inspect sample

// THIS WILL MOUNT YOUR VOLUME TO A CONTAINER
docker container run --name alpine-exe -it -v sample:/data alpine /bin/sh

// THIS WILL LOGIN TO THE CONTAINER AND CREATE A TEXT FILE
docker container run --name test \
alpine /bin/sh - c 'echo "This is a test" > sample.txt'



docker container run --name centos-exe -it --rm \
-v sample:/app/data \
centos:7 /bin/bash



// THIS WILL CREATE 2 FILES INSIDE THE SHELL OF YOUR CONTAINER
echo "Some data" > data.txt
echo "Some more data" > data2.txt

// THIS WILL DELETE THE CONTAINER
docker container rm alpine - exe

// THIS WILL LOGIN WITH A DIFFERENT CONTAINER WHILE 
// MOUNTING IT TO THE SAMPLE VOLUME
docker container run --name centos-exe -it --rm \
-v sample:/app/data \
centos:7 /bin/bash

//THIS WILL RUN A NEW CONTAINER WHILE MOUNTING A VOLUME
docker container run --name test2 -it --rm \
-v sample:/app/data \
nginx / bin / bash

//THIS WILL REMOVE A VOLUME
docker volume rm sample

// 1. SHARING DATA BETWEEN 2 CONTAINERS 
docker container run -it --name writer \
-v shared-data:/data \
alpine / bin / sh

// 2. 
echo "I can create a file" > /data/sample.txt

// 3.
docker container run -it --name reader \
-v shared-data:/app/data:ro \
ubuntu:22.04 /bin/bash