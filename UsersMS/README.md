# User Favorites Microservice

This microservice is part of a larger Node.js application part of the zest home assignment, designed to handle user operations related to managing favorite repositories. It provides endpoints for creating users, adding or removing favorite repositories, and fetching a user's favorite repositories list.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v20 or higher recommended)
- npm (Node Package Manager)

### Installing

Navigate to the microservice directory and install the required dependencies:

```bash
npm install
```

### Configuration

You may also need to configure Firebase credentials in `firbaseConfig.js` according to your Firebase project settings.

### Running the Service without Docker

To start the service, run:

```bash
node app.js
```

The service will be available at `http://localhost:3001`.

### Running the Service WITH Docker

To run the service with Docker, build the Docker image and run the container:

go to the parent directory of both the User and GitHub microservices and run:

```bash
docker-compose up
```

## API Endpoints

The microservice exposes the following endpoints:

- `POST /api/createUser`: Creates a new user with the provided username.
- `POST /api/addFavorite`: Adds a repository to the user's list of favorite repositories.
- `POST /api/removeFavorite`: Removes a repository from the user's list of favorite repositories.
- `GET /api/getFavorites`: Retrieves the list of a user's favorite repositories.

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Firebase](https://firebase.google.com/) - Database and authentication
- [Node.js](https://nodejs.org/) - The runtime environment

## Summary

It was a fun project to work on. I hope you enjoy it as much as I did.

I implemented the mandatory features and some nice to have features.

I am looking forward to hearing from you soon and available for any questions or feedback.

Thank you for the opportunity.

Tavor
