include ../../macros.mk

./data-types/lib: $(wildcard ./schema/*.json)
	$(call qtl_data_types,./data-types,$?)
