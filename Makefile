V ?= @
LOCALHOST := 'localhost'
PORT 			:= '4200'
PATH      := node_modules/.bin:$(PATH)
SHELL     := /usr/bin/env bash
# ------------------------------------------------------------------------------

default:
				$(V)echo Please use \'make help\' or \'make ..any_parameters..\'

push: pub
				$(V)git add .
				$(V)git commit -m "added support Makefile"
				$(V)git push -u origin master

git-%: pub
				$(V)git add .
				$(V)git commit -m "$(@:git-%=%)"
				$(V)git push origin master

git_pull:
				$(V)git pull

pri:
				$(V)cp ./config/environment.js.private ./config/environment.js

pub:
				$(V)cp ./config/environment.js.public ./config/environment.js

npm:
				$(V)npm install

test:
				$(V)ember test

unit:
				$(V)ember electron:test

start: pri
				$(V)ember electron

proxy: pri
				$(V)ember server --proxy http://localhost:8000

upload: pri
				$(v)push ./public; ./server.rb & popd; sleep 3s
				$(V)ember server --proxy http://localhost:8000/upload

run: pri
				$(V)ember server
