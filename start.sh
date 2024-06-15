#!/bin/bash

# Run the tests
npm run test
TEST_EXIT_CODE=$?

# Check if tests succeeded
if [ $TEST_EXIT_CODE -eq 0 ]; then
  echo "Tests passed. Starting development server..."
  npm run start:dev
else
  echo "Tests failed. Not starting development server."
  exit 1
fi
