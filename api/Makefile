default: lint build 

modupdate:
	@ buf mod update

lint:
	@ buf lint

build: modupdate
	@ buf build

gen-%:
	@ echo "Generating '$*' entityCRUD operations in: 'takenotes/v1/$*s.proto' ..."
	@ mkdir -p sr/v1
	go run proto_template_generator.go -n $* > takenotes/v1/$*s.proto

.PHONY: modupdate lint build breaking
