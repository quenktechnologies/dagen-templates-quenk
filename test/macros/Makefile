DAGEN:=../../node_modules/.bin/dagen
TSC:=../../node_modules/.bin/tsc

QTL_DAGEN_TEMPLATES:=../../templates
QTL_DAGEN_COMMONS?=../../node_modules/@quenk/dagen-commons

SCHEMAS:=../schema/*.json

include ../../macros.mk

$(shell pwd): data-types data-validators data-checks mongodb-models
	touch $@

include ./data-types/build.mk
include ./data-validators/build.mk
include ./data-checks/build.mk
include ./mongodb-models/build.mk

.PHONY: clean
clean:
	rm -R ./*/*.ts || true
