# CI/CD Pipeline with Minikube & IBM Cloud

## Project Overview
This project sets up a CI/CD pipeline using GitHub Actions, Minikube, and IBM Cloud Container Registry.

## Setup Instructions
1. Install Minikube, Docker, and IBM Cloud CLI.
2. Build and push Docker images.
3. Deploy to Minikube using `scripts/deploy-app.sh`.

## Running the Application
To access the frontend:
```sh
minikube service frontend-service
 
