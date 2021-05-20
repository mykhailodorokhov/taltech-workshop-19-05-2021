Pipedrive / TalTech workshop, 19.05.2021

# creating you first microservice with NodeJS

during the workshop we've created a simple RESTful API-service, that can store notes. It uses `koa` web framework (successor of well known `express.js`), `@koa-router` for routing, `koa-bodyparser` for parsing request body and `koa-logger` for logging incoming requests. `Joi` validates what JSON service receives upon POST request, `knexjs` helps us with building SQL queries and `mysql2` ensures communication with database. We use `nodemon` for hot-reloading during development.

feel free to contact me by email (mykhailo dot dorokhov ät pipedrive dot com) or on Facebook, LinkedIn or Instagram if you have any question related to the workshop or Pipedrive. 

## ⚙️ API

list of endpoints:

`GET /health` - checks whether service is healthy

`GET /api/notes` - returns list of all the notes

`GET /api/notes/:id` - returns a single note, by given `id`

`POST /api/notes` - creates a note. Expects JSON to be present in the body of the request, with `text` field in it

`DELETE /api/notes/:id` - deletes a note, by given `id`

## 🚀 How to run the app

there are two ways to run the app, simplest one using `docker compose`. Start with cloning this repository, and make sure you have `node` and `docker` installed.

(🤫 shh, you don't need to have `node` installed if you're running the app via `docker`. That's the beauty of it)

### option 1: via `docker compose`

to start app and db containers, run:
```
docker compose up
```

after both containers are up and running, execute this to setup database:

```
docker exec -it taltech-app npm run db-setup
```

that's it! App will be running at `localhost:3002`

### option 2: running the app locally

since we still be using MySQL server in a docker container, before running the app inself, let's run mysql server in the container, that docker will pull from DockerHub:

```
docker run --rm -d --name=taltech-db -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 mysql:5.7
```

now let's install all dependencies:

```
npm install
```

and setup database:

```
npm run db-setup
```

after this is done, let's run the app:

```
npm run dev
```

voila! App will be running at `localhost:3000`

## Useful commands

if you think you've messed something up with all those docker containers and images - this command will clean up your docker enviromnent, by deleting all containers and images:
```
docker rm -vf $(docker ps -a -q) && docker rmi -f $(docker images -a -q)
```

other than that:

`docker ps`  - shows list of running docker containers

`docker ps -a` - shows list of running and stopped docker containers

`docker image list`- shows available docker images 

`docker stop [container id or name]` - stops docker container

`docker rm [ontainer id or name]` - removes docker container

`docker image rm [image id or tag]` - removes docker image locally
