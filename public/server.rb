#!/usr/bin/env bash

clear
echo -en "Serving at http://api.dev.local:8000"
echo -en '\n\n'

ruby -run -e httpd . -p 8000
