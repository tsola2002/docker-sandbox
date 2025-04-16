// this will create a new version of an existing image
docker tag dashboard:latest dashboard:v2

// this will generate an image with 2 seperate tags (versions)
docker build -t dashboard:latest - t dashboard:v2 . 

// this will run version2 of the image
docker run --name dashboard-v2 -d -p 8080:80 dashboard:v2