
data-checks: $(wildcard ./schema/*.json)
	$(call qtl_data_checks,$@,$?)
	$(call qtl_data_checks_index,$@,$?)
