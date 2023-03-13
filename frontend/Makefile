docker_image ?= takenotes-frontend
docker_tag ?= v1.0.0
dockerfile_path ?= ./docker/Dockerfile

default: docker-build 

dist: 
	@ echo -n "Building angular app ..."
	@ ng build
	@ echo " done."

clean:
	@ echo -n "Cleaning 'dist' folder ..."
	@ rm -Rf dist
	@ echo " done."

	@ echo -n "Removing docker image '$(docker_image):$(docker_tag)' ..."
	@ docker rmi $(docker_image):$(docker_tag)
	@ echo " done."

docker-build: dist
	@ echo -n "Building docker image '$(docker_image):$(docker_tag)' ..."
	@ docker build -t $(docker_image):$(docker_tag) -f $(dockerfile_path) .
	@ echo " done."

docker-run: docker-build
	docker run --name takenotes-frontend -p 8080:80 --rm -it takenotes-frontend:v1.0.0
