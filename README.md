# Reload back-end test

This is my implementation for the test.

## Pre-requisites

You must have Docker and Docker Compose installed.

## Stack
- NodeJS `14-alpine` (using `TypeScript`)
- MySQL `5.7`
- Restify
- Knex
- Objection
- Jest
- Redis
- Docker
- Docker Compose
- Github Actions


## Details

The api contains these routes:
- companies
    - GET all
    - GET one by id *
    - GET one by name *
    - UPDATE its partial information (name, suffix etc) *
    - DELETE it *
- computers
    - GET all
    - GET all contained in one company
    - CREATE
    - DELETE
- contributors
    - GET all
    - GET all contained in one company
    - CREATE
    - UPDATE its partial information (age, jobTitle etc)
    - DELETE

* Use Redis

You can test each one in Insomnia (use insomnia_backup.json file)

The dataset id conflicts was solved by inserting all companies reindexing the id with auto-increment.

The tests was implemented on src/useCases/Company/GetCompanyById.

## Initializing

To start the api, run:

```
docker-compose up
```



