<h1>Twiddit_twiddits_ms</h1>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Microservicio de Twiddit encargado de gestionar los twiddits, retwiddits, replies, likes y dislikes.

Hay 4 endpoint principales:

http://localhost:8080/twiddit
  -> Get     /
  -> Get     /:id 
  -> Post    / & Json en body
  -> Put     /:id & Json en body
  -> Delete  /id
http://localhost:8080/like
  -> Get     /
  -> Get     /:id 
  -> Post    / & Json en body
  -> Delete  /id
http://localhost:8080/dislikes
  -> Get     /
  -> Get     /:id 
  -> Post    / & Json en body
  -> Delete  /id
http://localhost:8080/reply
  -> Get     /
  -> Get     /:id 
  -> Post    / & Json en body
  -> Put     /:id & Json en body
  -> Delete  /id

## Docker Installation

```bash
$ docker build -t twiddits_ms .
$ docker run -p 8080:8080 twiddits_ms 
```

## Local Installation

```bash
$ npm install 
```
or if error
```bash
$ npm install --force
```
## Running the app

```bash

# watch mode
$ npm run start:dev
