
data-checks: $(SCHEMAS)
	$(call qtl_data_checks,$@,$?)
	$(call qtl_data_checks_index,$@,$?)
