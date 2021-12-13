.PHONY: update-code-snippets

update-code-snippets: *.md
	vendor/bin/code-snippets --update-files $?
