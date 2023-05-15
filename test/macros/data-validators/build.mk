
data-validators: $(wildcard ./schema/*.json)
	$(call qtl_data_validators,$@,$?)
