USE Heart_Diseases_Analysis;

-- Total Rows
SELECT COUNT(*) AS Total_Rows
FROM heart_data;

-- Distinct Rows
SELECT COUNT(*) AS Distinct_Rows
FROM (
    SELECT DISTINCT *
    FROM heart_data
) AS temp;

-- Heart Disease Cases
SELECT *
FROM heart_data_clean
WHERE HeartDisease='Yes';

-- BMI Ordered
SELECT BMI, HeartDisease
FROM heart_data_clean
ORDER BY BMI DESC;

-- Heart Disease Count
SELECT HeartDisease,
COUNT(*) AS Total
FROM heart_data_clean
GROUP BY HeartDisease;

-- Average BMI
SELECT HeartDisease,
ROUND(AVG(BMI),2) AS Average_BMI
FROM heart_data_clean
GROUP BY HeartDisease;

-- Gender Count
SELECT Sex,
COUNT(*) AS Total
FROM heart_data_clean
GROUP BY Sex;