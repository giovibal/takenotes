appname ?= takenotes
buildDir ?= .build
distDir ?= dist
version ?= 0.1.0
export version

default: all

.PHONY: all
all: test build


.PHONY: build
build: gen
	go build -ldflags "-X 'main.Version=$(version)' -X 'main.CommitHash=$(commit_hash)' -w -s" -trimpath -o $(buildDir)/$(appname) ./cmd/takenotes/
	make -C web build

.PHONY: build-clean
build-clean:
	rm -Rf $(buildDir)
	make -C web clean


.PHONY: dist
dist: build
	mkdir -p $(distDir)
	cp $(buildDir)/$(appname) $(distDir)/$(appname)
	cp -r web/dist/web $(distDir)/spa
	cp -r gen/openapiv2 $(distDir)/openapiv2
	# TODO(gb): download swagger and unzip into dist
	# cp -r backend/swagger-ui $(distDir)/swagger-ui

dist-clean: 
	rm -Rf $(distDir)


	
.PHONY: test
test:
	go test -count=1 -cover ./...
	make -C web test

gen:
	@ echo "Generating $(appname) gRPC code"
	@ make -iC api
	@ buf generate

gen-clean: 
	@ echo "Cleaning $(appname) gRPC code"
	rm -Rf gen
	rm -Rf web/src/assets/gen

.PHONY: gen-update
gen-update: gen-clean gen 


.PHONY: clean-all
clean-all: gen-clean build-clean dist-clean
