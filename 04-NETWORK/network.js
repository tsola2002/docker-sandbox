// this will create a docker network
docker network create shola

// this will list all the networks on our system
docker network ls 

// this will inspect your docker network
docker network inspect shola

// this will delete an existing network
docker network rm mongo



docker run --name mongo -d --network mongo -p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=root \
-e MONGO_INITDB_ROOT_PASSWORD=secret mongo:5.0.1

docker logs mongo

docker run --name mongo-express --network mongo -d -p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=secret \
-e ME_CONFIG_MONGODB_SERVER=mongo mongo-express



docker network connect test user-api 
docker network connect test dashboard-v1

docker network disconnect test user-api
docker network disconnect test dashboard-v1

mongosh --host mongo -u root -p secret