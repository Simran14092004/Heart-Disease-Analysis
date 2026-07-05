USE Heart_Diseases_Analysis;

DROP VIEW IF EXISTS vw_heart_data;

CREATE VIEW vw_heart_data AS
SELECT *,
CASE
    WHEN BMI < 18.5 THEN 'Underweight'
    WHEN BMI < 25 THEN 'Normal'
    WHEN BMI < 30 THEN 'Overweight'
    ELSE 'Obese'
END AS BMI_Category
FROM heart_data_clean;