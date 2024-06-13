module_name := $(word 2, $(MAKECMDGOALS))
usecase_name := $(word 3, $(MAKECMDGOALS))
usecase_dir := ./src/$(module_name)/usecases/$(usecase_name)

usecase:
	mkdir -p $(usecase_dir)
	cd $(usecase_dir) && \
	touch "$(usecase_name).controller.ts" \
		"$(usecase_name).controller.spec.ts" \
		"$(usecase_name).service.ts" \
		"$(usecase_name).service.spec.ts"

module:
	mkdir -p ./src/$(module_name)
	cd ./src/$(module_name) && \
		mkdir -p ./usecases && \
		mkdir -p ./persistence && \
		mkdir -p ./domain && \
		touch ./index.ts && \
		touch "./$(module_name).module.ts" && \
		touch "domain/index.ts" && \
		touch "persistence/index.ts"
