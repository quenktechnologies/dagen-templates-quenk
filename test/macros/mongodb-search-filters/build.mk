
mongodb-search-filters: $(SCHEMAS)
	$(call qtl_mongodb_search_filters,$@,$?)
	$(call qtl_mongodb_search_filters_index,$@,$?)
