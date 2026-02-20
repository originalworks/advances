CAPABILITIES=CAPABILITY_IAM CAPABILITY_AUTO_EXPAND CAPABILITY_NAMED_IAM
REGION=us-east-1
STACK_NAME=advances-backend
ARTIFACT_NAME=advances.zip
TEMPLATE_FILE=template.yml

.deploy: advances.zip
	sam deploy --template-file $(TEMPLATE_FILE) --stack-name $(ENVIRONMENT)-$(STACK_NAME) --capabilities $(CAPABILITIES) --region $(REGION) --s3-bucket $(ARTIFACTS_BUCKET) --s3-prefix $(ENVIRONMENT) --parameter-overrides $(PARAMETERS) --no-fail-on-empty-changeset

deploy-dev: ENVIRONMENT=dev
deploy-dev: ARTIFACTS_BUCKET=dev-artifacts-ow
deploy-dev: PARAMETERS_FILE=template-config.dev.json
deploy-dev: PARAMETERS=$(shell jq -r '.Parameters | to_entries | map("\(.key)=\(.value)") | join(" ")' $(PARAMETERS_FILE))
deploy-dev: .deploy

deploy-prod: ENVIRONMENT=prod
deploy-prod: ARTIFACTS_BUCKET=artifacts-ow
deploy-prod: PARAMETERS_FILE=template-config.prod.json
deploy-prod: PARAMETERS=$(shell jq -r '.Parameters | to_entries | map("\(.key)=\(.value)") | join(" ")' $(PARAMETERS_FILE))
deploy-prod: .deploy

cleanup:
	rm -rf out && \
	rm -rf ../dist && \
	rm -rf $(ARTIFACT_NAME)

advances.zip: cleanup
	npx nx run backend:esbuild && \
	mkdir -p out/node_modules && cp -r ../../../node_modules/app-root-path out/node_modules &&  \
	zip -r advances.zip out
