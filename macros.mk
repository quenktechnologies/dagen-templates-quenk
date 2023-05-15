# Macros used during QT build processes. 
# Include this file to get access to the macros, remember to 
# read the order of arguments carefully to avoid unintended consequences.
#
# All macros are prefixed with qtl_ to avoid collisions. Macros may be updated
# at random when a better way of doing things is discovered but for the most
# part an effort should be made to ensure they have the same build artifacts.

DAGEN?=./node_modules/.bin/dagen
TSC?=./node_modules/.bin/tsc
QTL_DAGEN_TEMPLATES?=node_modules/@quenk/dagen-templates-quenk/templates
QTL_DAGEN_COMMONS?=./node_modules/@quenk/dagen-commons/lib/plugins/imports

# Generates the types package for a project using data-types package.
#
# globals:
#  DAGEN 		- The path to the dagen executable.
#  TSC   		- The path to the typescript compiler.
#  QTL_DAGEN_TEMPLATES 	- The path to the dagen-templates-quenk pacakge.
#  QTL_DAGEN_COMMONS 	- The path to the dagen-commons package.
#
# parameters:
# $1 - The path to the directory where types are built to.
# $2 - A space separated list of paths to generate type files for.
define qtl_data_types
	rm -R $@ || true
	cp -R -u $1/src $@
	mkdir -p $@
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/data-types \
	--template type.nunjucks \
	--plugin $(QTL_DAGEN_COMMONS)/lib/plugins/imports \
	--namespace types \
	--ext ts \
	--out $@ \
	$2
	$(TSC) --project $@
	touch $@
endef
