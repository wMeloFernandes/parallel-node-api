# Start all needed containers
start:
	docker-compose up --detach
.PHONY: start


# Stop all needed containers
stop:
	docker-compose down
.PHONY: stop


# Build docker image
build:
	docker-compose build
.PHONY: build


# Force docker image build without cache
rebuild:
	docker-compose build --no-cache
.PHONY: rebuild

# Setup app
setup: setup-permissions docker-setup build install
.PHONY: setup

# Install dependencies
install: 
	docker-compose run --rm server npm install
.PHONY: install

# Run lint
lint:
	docker-compose run --rm server npm run lint
.PHONY: lint

# Setup database environment
db-setup:
	docker-compose run --rm server ./bin/database_setup.sh
.PHONY: db-setup


# Delete devlopment database
db-reset:
	docker-compose run --rm server ./bin/database_drop.sh
.PHONY: db-reset


# Set Up Docker
docker-setup:
	./bin/docker_setup.sh
.PHONY: docker-setup


# Change the ownership of files/directories
setup-permissions:
	$(shell sudo chown -c -R $$USER:$$USER ./)
.PHONY: setup-permissions


# Add dependencies
npm-i:
	docker-compose run --rm server $(ARGS)
.PHONY: npm-i


# Run tests
test:
	echo "=== Not implemented yet!!! ==="
.PHONY: test

# Start container running bash
bash:
	docker-compose run --rm server sh
.PHONY: bash


logs:
	docker logs web-api -f
.PHONY: logs


.SILENT: # prevent echoing of commands for all targets