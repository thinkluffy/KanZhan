#!/bin/bash

TOOLS_DIR=$(dirname $0)

cd "${TOOLS_DIR}/../Src"
python -m SimpleHTTPServer
