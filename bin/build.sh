#!/bin/bash
IMAGE=cmrfrd.site
docker build -t $IMAGE -f docker/Dockerfile.develop .
