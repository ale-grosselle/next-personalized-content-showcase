#!/bin/bash

docker stop next-benchmark-container
docker rm next-benchmark-container

# Build the Next.js application
npm run build

# Build the Docker image
docker build -t next-benchmark .

# Run the container in detached mode
docker run \
  -d \
  --name next-benchmark-container \
  --cpus="0.5" \
  --memory="512m" \
  -p 3000:3000 \
  next-benchmark
