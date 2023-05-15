
mongodb-models: $(SCHEMAS)
	$(call qtl_mongodb_models,$@,$?)
	$(call qtl_mongodb_models_index,$@,$?)
