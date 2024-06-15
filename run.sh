#!/bin/bash

# Start test environment
docker-compose up -d mongodb_test
docker-compose run test
TEST_EXIT_CODE=$?

# Stop and remove test environment
docker-compose down

# Check if tests succeeded
if [ $TEST_EXIT_CODE -eq 0 ]; then
  echo "Tests passed. Starting production environment..."
  docker-compose up -d app mongodb
else
  echo "Tests failed. Not starting production environment."
  exit 1
fi
