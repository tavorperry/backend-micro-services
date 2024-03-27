# Micro-Services Repository

This repository contains two separate but interconnected micro-services, GitHubMS and UsersMS, designed to work together as part of a larger application ecosystem. GitHubMS is responsible for interfacing with GitHub's API to fetch repository information, while UsersMS manages user data, including favorite repositories.

## Architecture Overview

The system is designed around a micro-services architecture, facilitating scalability, ease of maintenance, and separation of concerns. The services communicate over a shared network established through Docker, ensuring isolated and secure interactions.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Docker
- Docker Compose

You should also be familiar with basic Docker operations and the structure of Docker Compose files.

## Getting Started

To get both micro-services up and running, follow these steps:

1. **Clone the Repository**

   Start by cloning this repository to your local machine using the following command:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the Repository Directory**

   Change into the repository directory:
   ```
   cd <repository-name>
   ```

3. **Build and Run with Docker Compose**

   Use Docker Compose to build and deploy the micro-services. The following command will build the images (if they haven't been built) and start the containers:
   ```
   docker-compose up
   ```

   This command reads the `docker-compose.yml` file included in the repository, which defines both micro-services, their configurations, and how they should be networked together.

## Services

- **GitHubMS**: Runs on port `3000` and provides an API for interacting with GitHub repositories.
- **UsersMS**: Runs on port `3001` and manages user data, including the ability to mark repositories as favorites.

Each service has its own Dockerfile and set of dependencies, which are managed independently to ensure that changes to one service do not directly impact the other.

## Interacting with the Services

Once the services are running, you can interact with them through their exposed APIs. Refer to each service's individual documentation for details on the available endpoints and how to use them.

## Stopping the Services

To stop the running containers and remove the containers, networks, and volumes created by `docker-compose up`, use the following command:
```
docker-compose down
```

## Don't forget
Do not forget to run also the FE part of the project. You can find the repository [here](
