NAMESPACE ?= aymenzaabar
NAME := pfesecurity
# Docker registry
REGISTRY ?= index.docker.io
# Docker image reference
IMG := ${REGISTRY}/${NAMESPACE}/${NAME}
# tag
IMG_VERSION ?= latest
TIME_IMG_VERSION ?=  ${IMG_VERSION}-`date +'%Y-%m-%d-%H%M%S'`

build:
	@echo "Building docker image";
	@docker build  -t ${IMG}:${IMG_VERSION} .

push:
	@echo "Push docker image";
	@docker push ${IMG}:${IMG_VERSION}
	@docker tag  ${IMG}:${IMG_VERSION} ${IMG}:${TIME_IMG_VERSION}
	@docker push ${IMG}:${TIME_IMG_VERSION}

clean:
	@docker rmi -f ${IMG}:${IMG_VERSION}

.PHONY: build push cleann