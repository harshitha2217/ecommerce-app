# CI/CD Project with Kubernetes

This repository contains a complete CI/CD pipeline implementation with a frontend and backend application, deployed using Docker containers and Kubernetes.

## Project Structure
cicd-project/
│── .github/
│   └── workflows/
│       └── ci-cd-pipeline.yml
│── public/             # Frontend
│   ├── Dockerfile
│   ├── index.html
│   ├── main.js
│   └── package.json
│── server/             # Backend
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
│── k8s/                # Kubernetes Manifests
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── backend-service.yaml
│── scripts/
│   ├── start-minikube.sh
│   ├── deploy-app.sh
│   └── test-app.sh
│── .gitignore
│── README.md
│── docker-compose.yml
│── minikube-config.yaml


## Components

### Frontend Application
Located in the `public/` directory, the frontend is a web application with:
- `Dockerfile` for containerization
- `index.html` and `main.js` for the web interface
- `package.json` for dependency management

### Backend Application
Located in the `server/` directory, the backend service includes:
- `Dockerfile` for containerization
- `server.js` as the main application file
- `package.json` for dependency management

### Kubernetes Configuration
The `k8s/` directory contains Kubernetes manifests for deploying both frontend and backend:
- `frontend-deployment.yaml` & `frontend-service.yaml` for frontend deployment
- `backend-deployment.yaml` & `backend-service.yaml` for backend deployment

### CI/CD Pipeline
The `.github/workflows/ci-cd-pipeline.yml` defines the automated pipeline for:
- Building Docker images
- Running tests
- Deploying to Kubernetes

## Setup and Installation

### Prerequisites
- Docker
- Kubernetes (Minikube for local development)
- Node.js
- kubectl CLI

### Local Development Setup

1. Start Minikube:
```bash
./scripts/start-minikube.sh
```

2. Build and deploy the application:
```bash
./scripts/deploy-app.sh
```

3. Run tests:
```bash
./scripts/test-app.sh
```

### Using Docker Compose
For local development without Kubernetes, use:
```bash
docker-compose up --build
```

## Configuration

### Minikube Configuration
The `minikube-config.yaml` file contains the configuration for local Kubernetes cluster setup.

### Environment Variables
Create a `.env` file based on the provided `.env.example` template for:
- API endpoints
- Database connections
- Other environment-specific configurations

## Development Workflow

1. Make changes to the code
2. Commit and push to GitHub
3. GitHub Actions will automatically:
   - Build new Docker images
   - Run tests
   - Deploy to Kubernetes if tests pass

## Testing

Run the test suite:
```bash
./scripts/test-app.sh
```

## Deployment

The application can be deployed in two ways:

### Local Deployment
```bash
./scripts/deploy-app.sh
```

### Production Deployment
Automated through GitHub Actions when pushing to the main branch.

## Monitoring and Logs

- Access Kubernetes dashboard:
```bash
minikube dashboard
```
- View application logs:
```bash
kubectl logs -f deployment/frontend
kubectl logs -f deployment/backend
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
