# Movie App

- [Movie App](#movie-app)
  - [Introduction & requirements](#introduction--requirements)
    - [Installation](#installation)
    - [Folder structure](#folder-structure)
  - [Client](#client)
    - [Deployment](#deployment)
    - [Future improvements](#future-improvements)
    - [Main resources](#main-resources)
    - [Libraries](#libraries)
  - [Contributor](#contributor)

## Introduction & requirements

This repository contains a tech challenge as a part of a **frontend** job
application process. The main project it's done with React, redux and Three JS
library

The purpose of this application is to consume
[The movie db](https://www.themoviedb.org/) V3 and show both movies and tv shows
in different pages. The Home page renders a carousel where you can toogle
between the most popular movies and Tv shows.

Each movie/tv show card is a link that redirects the user to a detailed page
showing more information about the picked one and also with related media.

> Check the deployed version of this challenge
> [here](https://noiztbander-movie-app.herokuapp.com/)

### Installation

First, you will need to `clone` or `fork` the repository into your Github
account. Choose a place in your local machine and paste the next command in your
terminal:

```
$ git clone https://github.com/Noiztbander/movie-app.git
```

**Environment variables**

The **client** .env file needs to contain the API key. This is where the client
is getting the data from the database.

```
REACT_APP_MOVIED_DB_ACCESSTOKEN=YourAccesTokenHere
REACT_APP_MOVIE_DB_API_KEY=pasteYourApiKeyOverHere
```

### Folder structure

```
├── documentation
├── public
└── src
  ├── __test__
  ├── api // All api requests
  ├── assets
  ├── components
  ├── config // with the configuration of .env
  ├── constants
  ├── HighOrderComponents
  ├── hooks // with reusable code
  ├── pages
  ├── redux // the engine of the app
  ├── sass // global styles

```

## Client

The client package consists in a React app template. Its `src` folder contains
components used in the application. Also it's used ThreeJs library to make the
background effect.

The application is styled with Sass and bootstrap and it is divided into
separate files in the application.

### Deployment

In order to deploy both client and server workspace this application has used
[Heroku](www.heroku.com).

### Future improvements

- Authentication.
- General searchbar.
- Use localstorage to persist data

### Main resources

- [Bootstrap](https://getbootstrap.com/)
- [Eslint](https://eslint.org/)
- [NodeJs](https://nodejs.org/)
- [Prettier](https://prettier.io/)
- [React](https://es.reactjs.org/)
- [SASS](https://sass-lang.com/)
- [The MovieDb](https://developers.themoviedb.org/3/movies/get-similar-movies)

### Libraries

- [Three JS](https://threejs.org/)

## Contributor

👤 [Erick Noiztbander](https://github.com/Noiztbander)
