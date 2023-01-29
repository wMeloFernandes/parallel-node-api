echo "=== Starting project setup for docker development environment ==="
if ! command -v 'docker-compose' > /dev/null; then
  echo "Docker Compose not installed. Install before continue."
  exit 1
fi
echo "Docker Setup Finished!" 
