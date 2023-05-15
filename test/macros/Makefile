DAGEN:=../../node_modules/.bin/dagen
TSC:=../../node_modules/.bin/tsc

QTL_DAGEN_TEMPLATES:=../../templates
QTL_DAGEN_COMMONS?=../../node_modules/@quenk/dagen-commons

SCHEMAS:=../schema/*.json

include ../../macros.mk

$(shell pwd): $(shell find . -maxdepth 1 -type d)
	touch $@

include ./data-types/build.mk
include ./data-validators/build.mk
include ./data-checks/build.mk
include ./mongodb-models/build.mk
include ./mongodb-fields/build.mk

.PHONY: clean
clean:
	rm -R ./*/*.ts || true
