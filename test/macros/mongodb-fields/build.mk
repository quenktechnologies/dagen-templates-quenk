
mongodb-fields: $(SCHEMAS)
	$(call qtl_mongodb_fields,$@,$?)
	$(call qtl_mongodb_fields_index,$@,$?)
