DAGEN:=../../node_modules/.bin/dagen
TSC:=../../node_modules/.bin/tsc
QTL_DAGEN_TEMPLATES:=../../templates
QTL_DAGEN_COMMONS?=../../node_modules/@quenk/dagen-commons

.: ./data-types
	touch $@

include ./data-types/build.mk

.PHONY: clean
clean:
	rm -R ./data-types/lib || true
