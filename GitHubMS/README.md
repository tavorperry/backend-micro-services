# GitHub Microservice for Zest Home Assignment

This microservice is designed to interact with GitHub to fetch repository information based on user preferences. It supports operations such as retrieving all repositories or filtering based on user-defined criteria, including favorites management when integrated with a User Microservice.

## Getting Started

These instructions will help you to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

- Docker (if running with Docker)
- Node.js (v20 or higher recommended)
- npm (Node Package Manager)

### Running the Service locally (w/o Docker)

To start the service, run:

```bash
node app.js
```

The service will be available at `http://localhost:3000`.

### Running the Service with Docker

To run the service with Docker, build the Docker image and run the container:

go to the parent directory of both the User and GitHub microservices and run:

```bash
docker-compose up
```

## Usage

Here are the endpoints provided by this microservice:

- `GET /api/getAllRepositories`: Retrieves all repositories based on the specified criteria.

Query parameters:
- `username` - The GitHub username to fetch repositories for (required for favorites feature).
- `order` - Order of repositories by stars (`asc` or `desc`).
- `onlyFav` - Boolean to filter only favorite repositories (requires User Microservice integration).

### Configuration

To configure the microservice, adjust the following environment variables in the Dockerfile or docker-compose.yml:

- `USERMS_URL` - URL of the User Microservice for fetching favorite repositories.

## Built With

- [Express](https://expressjs.com/) - The web framework used.
- [Docker](https://www.docker.com/) - Containerization platform.
- [Octokit](https://github.com/octokit/octokit.js) - GitHub SDK for interfacing with GitHub API.
- [Node.js](https://nodejs.org/) - The runtime environment.

## Summary

It was a fun project to work on. I hope you enjoy it as much as I did.

I implemented the mandatory features and some nice-to-have features.

I am looking forward to hearing from you soon and available for any questions or feedback.

Thank you for the opportunity.

Tavor
