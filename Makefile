.PHONY: all update-code-snippets server-start

all: update-code-snippets examples/index.xhtml

update-code-snippets: *.md
	vendor/bin/code-snippets --update-files $?

examples/index.xhtml: examples/index.html
	xmlstarlet --quiet val $< && cp $< $@

server-start:
	bundle exec jekyll serve --destination _site/html-css-js
