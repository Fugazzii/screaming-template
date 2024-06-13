# Extract module_name and usecase_name from MAKECMDGOALS
module_name := $(word 2, $(MAKECMDGOALS))
usecase_name := $(word 3, $(MAKECMDGOALS))

# Define directory paths
usecase_dir := ./src/$(module_name)/usecases/$(usecase_name)

usecase:
	mkdir -p $(usecase_dir)
	cd $(usecase_dir) && \
	touch "$(usecase_name).controller.ts" \
		"$(usecase_name).controller.spec.ts" \
		"$(usecase_name).service.ts" \
		"$(usecase_name).service.spec.ts"
