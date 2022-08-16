## Enviroment Variable

```sh
  $ touch .env

```

```
  DB_HOST=<your-db-host> 'eg: localhost'
  DB_PORT=<your-db-port> 'eg: 5432'
  DB_USERNAME=<your-db-username> 'eg: secretusername'
  DB_PASSWORD=<your-db-password> 'eg: secretpassword'
  DB_NAME=<your-db-name> 'eg: nestjsdb'

```

## Setup Postgresql database for local development

**_Ensure that your machine installed docker_**

```sh
$ sudo sh ./addons/postgres/postgres-setup.sh

```

And then:

```sh
$ cd addons/postgres/ && docker compose up -d

```

**or:**

```sh
$ cd addons/postgres/ && docker-compose up -d

```
