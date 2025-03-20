docker container run --name java-demo --rm \
-p 8080:8080
-v $(pwd)/.:/app java-demo


docker container run --rm -it --volume $(pwd):/app -p 3000:3000 sample-app``