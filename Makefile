V ?= @
LOCALHOST := 'localhost'
PORT 			:= '4200'
PATH      := node_modules/.bin:$(PATH)
SHELL     := /usr/bin/env bash

RUBYSERVICE := $(shell pgrep ruby)
NODESERVICE := $(shell pgrep node)
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

kill_ruby:
				$(V)echo "\nChecking to see if RUBY process exists:\n"
				$(V)if [ "$(RUBYSERVICE)" ]; then killall ruby && echo "Running Ruby Service Killed"; else echo "No Running Ruby Service!"; fi

kill_node:
				$(V)echo "\nChecking to see if Node process exists:\n"
				$(V)if [ "$(NODESERVICE)" ]; then killall node && echo "Running Node Service Killed"; else echo "No Running Node Service!"; fi

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

server: kill_ruby pri
				$(V)export TERM='xterm-256color'
				$(V)pushd ./public; ./server.rb &

proxy: server
				$(V)ember server --proxy http://api.dev.local:8000 --host api.dev.local --port 4200


check:
				$(V)ncu -a
				$(V)ncu -u
				$(V)npm install

node:
				$(V)pushd ./public; npm start &

up: node pri
				$(V)ember server --proxy http://api.dev.local:8000 --host api.dev.local --port 4200

run: pri
				$(V)ember server
