
data-types: $(wildcard ./schema/*.json)
	$(call qtl_data_types,$@,$?)
