#!/bin/bash

# deploy.sh - Interactive Docker deployment script

echo "=== Docker Deployment Script ==="
echo ""

# Ask for container name
read -p "Enter container name [cyquad-app]: " CONTAINER_NAME
CONTAINER_NAME=${CONTAINER_NAME:-cyquad-app}

# Ask for image name
read -p "Enter image name [cyquad-web]: " IMAGE_NAME
IMAGE_NAME=${IMAGE_NAME:-cyquad-web}

# Ask for port
read -p "Enter port to expose [8080]: " PORT
PORT=${PORT:-8080}

echo ""
echo "Configuration:"
echo "  Container: $CONTAINER_NAME"
echo "  Image: $IMAGE_NAME"
echo "  Port: $PORT"
echo ""

read -p "Proceed with deployment? (y/n): " CONFIRM
if [ "$CONFIRM" != "y" ]; then
    echo "Deployment cancelled."
    exit 0
fi

echo ""
echo "Building Docker image..."
docker build --no-cache -t $IMAGE_NAME .

if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

echo "Stopping old container..."
docker stop $CONTAINER_NAME 2>/dev/null || true

echo "Removing old container..."
docker rm $CONTAINER_NAME 2>/dev/null || true

echo "Starting new container..."
docker run -d -p $PORT:80 --name $CONTAINER_NAME $IMAGE_NAME

if [ $? -eq 0 ]; then
    echo ""
    echo "Deployment complete!"
    echo "Opening browser at: http://127.0.0.1:$PORT"
    
    # Open browser (works on macOS)
    open "http://127.0.0.1:$PORT"
else
    echo "Failed to start container!"
    exit 1
fi
