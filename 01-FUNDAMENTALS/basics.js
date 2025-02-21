// this will check whether docker CLI is enabled
docker --version

// this will list flags can you can attach to your docker command
docker

// this wiil display all containers
docker ps - a
docker container ls --all

// this will display the current running containers
docker ps
docker container ls

// this will run a docker container
docker run -d -p 80:80 docker/getting-started

// this will stop a docker container
docker stop 3ae049fd
docker stop affectionate_williams

//this will delete a docker container
docker rm 3ae049fd

// this will switch to the interactive linux shell inside of your container
docker exec -it 636a99c5b5 sh
docker exec -it suspicious_bash sh


// generates a sample template for generating docker ps better
export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\T{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"

//runs the ps command using the above format
docker ps --format=$FORMAT