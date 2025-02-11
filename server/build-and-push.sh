#!/bin/bash

# Exit on any error
set -e

# Variables for Docker registry configuration
REGION="us-south"
NAMESPACE="ecommerce-app"
VERSION="1.0"

# Ensure we're in the right directory
if [[ ! "$PWD" =~ /ecommerce-app[/]? ]]; then
    echo "Error: Please run this script from within the ecommerce-app directory or its subdirectories"
    exit 1
fi

# Navigate to project root
cd "$(pwd | sed 's/\(.*ecommerce-app\).*/\1/')"

echo "Working from directory: $(pwd)"

echo "Building and pushing frontend application..."
cd public || { echo "Error: public directory not found"; exit 1; }
docker build -t "${REGION}.icr.io/${NAMESPACE}/frontend-app:${VERSION}" .
docker push "${REGION}.icr.io/${NAMESPACE}/frontend-app:${VERSION}"

echo "Building and pushing backend application..."
cd ../server || { echo "Error: server directory not found"; exit 1; }
docker build -t "${REGION}.icr.io/${NAMESPACE}/backend-app:${VERSION}" .
docker push "${REGION}.icr.io/${NAMESPACE}/backend-app:${VERSION}"

echo "Build and push completed successfully!"