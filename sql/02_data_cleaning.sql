USE Heart_Diseases_Analysis;

DROP TABLE IF EXISTS heart_data_clean;

CREATE TABLE heart_data_clean AS
SELECT DISTINCT *
FROM heart_data;
