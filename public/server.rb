#!/usr/bin/env bash

clear
echo -en "Serving at http://api.dev.local:4200"
echo -en '\n\n'

ruby -run -e httpd . -p 4200
