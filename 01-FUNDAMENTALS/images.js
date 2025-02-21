//this command will display all our images 
docker image ls
docker images 

// this wiil build an alpine image
docker container run -it \
--name sample \
alpine: 3.17 / bin / sh

// installing the curl package from inside the shell
apk update && apk add curl

curl - I https://google.com

// this will display all containers and search for sample
docker container ls - a | grep sample
docker container ls - a | grep sample
docker ps - a--format == $FORMAT | grep sample

// this will show us differences in the container
docker container diff sample

// this will persist out created image and generate a new image from it
docker container commit sample my-alpine

// this will show the image history of the image
docker image history my - alpine


// this will build a docker image from a dockerfile for us
docker image build . -t dashboard
docker image build - t my - centos - f Dockerfile.

docker run --name dashboard -d -p 8080:80 dashboard


//setting up tags that will be pushed to docker hub
docker tag dashboard:latest tsola2002 / nginx - dashboard: latest

// this will push our image to docker hub
docker push tsola2002/nginx-dashboard:latest
