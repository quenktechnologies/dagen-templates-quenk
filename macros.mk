# Macros used during QT build processes. 
# Include this file to get access to the macros, remember to 
# read the order of arguments carefully to avoid unintended consequences.
#
# All macros are prefixed with qtl_ to avoid collisions. Macros may be updated
# at random when a better way of doing things is discovered but for the most
# part an effort should be made to ensure they have the same build artifacts.

,:=,
SPACE:=
SPACE:=$(SPACE) $(SPACE)

DAGEN?=./node_modules/.bin/dagen
TSC?=./node_modules/.bin/tsc

QTL_DAGEN_TEMPLATES?=./node_modules/@quenk/dagen-templates-quenk/templates
QTL_DAGEN_COMMONS?=./node_modules/@quenk/dagen-commons

# These are set already but can be overriden for customisation.
# globals:
#  DAGEN 		- The path to the dagen executable.
#  TSC   		- The path to the typescript compiler.
#  QTL_DAGEN_TEMPLATES 	- The path to the dagen-templates-quenk package.
#  QTL_DAGEN_COMMONS 	- The path to the dagen-commons package.

# Generates the data-types files for a project.
#
# $1 - A path to the directory where types will be output.
# $2 - A space separated list of paths to schema files to use.
define qtl_data_types
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/data-types \
	--template type.nunjucks \
	--plugin $(QTL_DAGEN_COMMONS)/lib/plugins/imports \
	--namespace types \
	--ext ts \
	--out $1 \
	$2
endef

# Generates the data-validators files for a project.
#
# parameters:
# $1 - A path to the directory where the validators will be output.
# $2 - A space separated list of paths to schema files to use.
define qtl_data_validators
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/data-validators \
	--template type.nunjucks \
        --plugin $(QTL_DAGEN_COMMONS)/lib/plugins/imports \
        --plugin $(QTL_DAGEN_COMMONS)/lib/plugins/validators \
	--namespace validators \
	--ext ts \
	--out $1 \
	$2
endef

# Generates the data-checks files for a project.
#
# parameters:
# $1 - A path to the directory where the checks will be output.
# $2 - A space separated list of paths to schema files to use.
define qtl_data_checks
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/data-checks \
	--template type.nunjucks \
	--plugin $(QTL_DAGEN_COMMONS)/lib/plugins/imports \
	--plugin $(QTL_DAGEN_COMMONS)/lib/plugins/checks \
	--namespace validators \
	--namespace checks \
	--ext ts \
	--exclude isType \
	--out $1 \
	$2
endef

# Generates the index file for data-checks files in a project.
#
# parameters:
# $1 - A path to the directory where the checks are.
# $2 - A space separated list of paths to schema files to use.
define qtl_data_checks_index
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/data-checks \
	--template index.nunjucks \
	--plugin $(QTL_DAGEN_COMMONS)/lib/plugins/imports \
	--namespace validators \
	--namespace checks \
	--exclude isType \
	--set schemaNames='$(subst $(SPACE),$(,),$(notdir $(basename ($2))))' \
	> $1/index.ts
endef

QTL_MONGODB_MODELS_TEMPLATES?=
qtlmmt:=$(if $(QTL_MONGODB_MODELS_TEMPLATES),$(foreach dirs,$(QTL_MONGODB_MODELS_TEMPLATES),--templates $(dirs) ))

# Generates the mongodb-models files for a project.
#
# parameters:
# $1 - A path to the directory where the models will be output.
# $2 - A space separated list of paths to schema files to use.
define qtl_mongodb_models
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/mongodb-models \
	$(qtlmmt) \
	--template model.nunjucks \
	--plugin $(QTL_DAGEN_COMMONS)/lib/plugins/imports \
	--namespace models \
	--ext ts \
	--exclude isType \
	--out $1 \
	$2
endef

# Generates the index file for mongodb-models files in a project.
#
# parameters:
# $1 - A path to the directory where the models are.
# $2 - A space separated list of paths to schema files to use.
define qtl_mongodb_models_index
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/mongodb-models \
	--template index.nunjucks \
	--namespace models \
	--exclude isType \
	--set schemaNames='$(subst $(SPACE),$(,),$(notdir $(basename ($2))))' \
	> $1/index.ts
endef

# Generates the mongodb-fields files for a project.
#
# parameters:
# $1 - A path to the directory where the fields will be output.
# $2 - A space separated list of paths to schema files to use.
define qtl_mongodb_fields
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/mongodb-fields \
	--template model.nunjucks \
	--plugin $(QTL_DAGEN_COMMONS)/lib/plugins/imports \
	--namespace fields \
	--ext ts \
	--exclude isType \
	--out $1 \
	$2
endef

# Generates the index file for mongodb-fields files in a project.
#
# parameters:
# $1 - A path to the directory where the fields are.
# $2 - A space separated list of paths to schema files to use.
define qtl_mongodb_fields_index
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/mongodb-fields \
	--template index.nunjucks \
	--namespace fields \
	--set schemaNames='$(subst $(SPACE),$(,),$(notdir $(basename ($2))))' \
	--exclude isType \
	> $1/index.ts
endef

# Generates the mongodb-search-filters files for a project.
#
# parameters:
# $1 - A path to the directory where the search filters will be output.
# $2 - A space separated list of paths to schema files to use.
define qtl_mongodb_search_filters
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/mongodb-search-filters \
	--template model.nunjucks \
	--plugin $(QTL_DAGEN_COMMONS)/lib/plugins/imports \
	--namespace filters \
	--ext ts \
	--exclude isType \
	--out $1 \
	$2
endef

# Generates the index file for mongodb-search-filters files in a project.
#
# parameters:
# $1 - A path to the directory where the search filters are.
# $2 - A space separated list of paths to schema files to use.
define qtl_mongodb_search_filters_index
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/mongodb-search-filters \
	--template index.nunjucks \
	--namespace filters \
	--set schemaNames='$(subst $(SPACE),$(,),$(notdir $(basename ($2))))' \
	--exclude isType > $1/index.ts
endef

QTL_REMOTE_MODELS_TEMPLATES?=
qtlrmt:=$(if $(QTL_REMOTE_MODELS_TEMPLATES),$(foreach dirs,$(QTL_REMOTE_MODELS_TEMPLATES),--templates $(dirs) ))

# Generates the remote-models files for a project.
#
# parameters:
# $1 - A path to the directory where the remote models will be output.
# $2 - A space separated list of paths to schema files to use.
define qtl_remote_models
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/remote-models \
	$(qtlrmt) \
	--template model.nunjucks \
	--plugin $(QTL_DAGEN_COMMONS)/lib/plugins/imports \
	--namespace remotemodels \
	--ext ts \
	--exclude isType \
	--out $1 \
	$2
endef

# Generates the http-models files for a project.
#
# parameters:
# $1 - A path to the directory where the http models will be output.
# $2 - A space separated list of paths to schema files to use.
define qtl_http_models
	$(DAGEN) --templates $(QTL_DAGEN_TEMPLATES)/http-models \
	--template model.nunjucks \
	--plugin $(QTL_DAGEN_COMMONS)/lib/plugins/imports \
	--namespace httpmodel \
	--ext ts \
	--exclude isType \
	--out $1 \
	$2
endef
