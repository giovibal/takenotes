appname ?= takenotes
version ?= 0.1.0

default: build

node_modules:
	npm install


.PHONY: clean_node_modules
clean_node_modules:
	rm -Rf node_modules

.PHONY: build
build: node_modules
	@ echo -n "Building $(appname) ..."
	@ npm run build
	@ echo " done."

.PHONY: clean
clean:
	@ echo -n "Cleaning $(appname) build ..."
	@ rm -Rf dist
	@ echo " done."

.PHONY: clean-all
clean-all: clean clean_node_modules clean-devloop
	@ echo -n "Cleaned $(appname) build, node_modules, grpc generated code."

.PHONY: test
test: node_modules
	npm run test-headless

.PHONY: run
run: build-docker-images
	docker run --name $(appname) -p 4200:4200 --rm -it $(docker_image)
