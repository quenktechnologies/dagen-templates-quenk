DAGEN:=../../node_modules/.bin/dagen
TSC:=../../node_modules/.bin/tsc

QTL_DAGEN_TEMPLATES:=../../templates
QTL_DAGEN_COMMONS?=../../node_modules/@quenk/dagen-commons

include ../../macros.mk

$(shell pwd): data-types data-validators data-checks
	touch $@

include ./data-types/build.mk
include ./data-validators/build.mk
include ./data-checks/build.mk

.PHONY: clean
clean:
	rm -R ./*/*.ts || true
