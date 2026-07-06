# Heart Disease Analysis using MySQL and Tableau

🌐 **Live Demo:** [https://heart-disease-analysis-vha4.onrender.com](https://heart-disease-analysis-vha4.onrender.com)

This project started as a coursework task, but it became much more than that for me. I wanted to understand how health and lifestyle factors relate to heart disease, and I also wanted to learn how data should be prepared before it is turned into a dashboard.

When I first looked at the dataset, it seemed simple, but I quickly noticed that there were duplicate records. That was an important issue because using the raw data directly could affect the results. Instead of jumping straight into Tableau, I decided to bring the data into MySQL, clean it using SQL, and then use the cleaned data for visualization.

That decision made the analysis more reliable and helped me understand the real value of data cleaning in any analytics project.

## Project Goal

The main goal of this project was to study heart disease-related data and present the findings through Tableau dashboards in a way that is easy to understand.

I focused on identifying patterns between heart disease and factors like age, gender, BMI, smoking, alcohol consumption, physical activity, diabetes, stroke, sleep, and other health conditions.

## What I Wanted to Learn

Through this project, I wanted to learn:

- how to import and manage data in MySQL
- how to clean data properly before analysis
- how SQL can help in preparing a dataset for visualization
- how Tableau can turn prepared data into meaningful dashboards
- how to present health-related insights in a clear and useful way

## Project Workflow

The workflow for this project was:

1. Collect the raw dataset
2. Import the data into MySQL
3. Clean the dataset using SQL
4. Remove duplicate records
5. Create useful SQL views and analysis queries
6. Use the prepared data in Tableau
7. Build dashboards and present the insights

## Tools Used

- MySQL
- SQL
- Tableau
- Microsoft Excel
- Git and GitHub

## Dataset

The dataset used in this project includes information related to heart disease and several health indicators such as:

- Age Category
- Gender
- BMI
- Smoking
- Alcohol Consumption
- Physical Activity
- Diabetes
- Stroke
- General Health
- Sleep Time
- Asthma
- Kidney Disease
- Skin Cancer
- Race

## SQL Work Performed

I imported the dataset into MySQL and performed the following SQL steps:

- created a database for the project
- created a table for the dataset
- removed duplicate records using DISTINCT
- filtered records using WHERE
- grouped and summarized data using GROUP BY
- calculated averages using AVG()
- sorted results using ORDER BY
- created a SQL view for BMI-based analysis

## Tableau Work

The cleaned dataset was then used to create Tableau visualizations for different aspects of heart disease analysis.

You can view the sheets, dashboards, and story on Tableau Public here:

- Tableau Public: https://public.tableau.com/views/HeartDiseaseWorkBook/Story1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link

The visualizations include:

- Heart Disease Distribution
- Diabetic vs Stroke
- Smoking and Alcohol vs Heart Disease
- Other Health Diseases vs Stroke
- Race-wise Heart Disease
- General Health vs Heart Disease
- Physical Activity vs Heart Disease
- Age and BMI vs Diabetic
- Stroke, Heart Disease and Diabetes Analysis
- Interactive dashboard

## Project Notes

One of the biggest lessons I learned while working on this project was that visualization is not only about making charts look good. The real value comes from preparing the data properly before building the dashboard.

As the team leader, I also learned that choosing the right process at the beginning can save a lot of time later. Cleaning the data in MySQL before moving to Tableau made the final analysis more accurate and much easier to understand.

## Repository Structure

```text
Heart-Disease-Analysis/
│
├── app.py                  ← Flask web application
├── Procfile                ← Render start command
├── render.yaml             ← Render deployment config
├── requirements.txt        ← Python dependencies
│
├── templates/
│   └── index.html          ← Main web page
│
├── static/
│   ├── css/style.css
│   └── js/script.js
│
├── README.md
└── LICENSE
```

> Note: Dataset files, SQL scripts, and Tableau workbooks are excluded from this repository.

## What I Learned

This project helped me understand the importance of data preparation in analytics. A dashboard can only be as good as the data behind it.

It also showed me that SQL and Tableau work very well together when the goal is to turn raw data into useful insights.

## Deployment

The web application is deployed on **Render** and can be accessed live at:

🔗 [https://heart-disease-analysis-vha4.onrender.com](https://heart-disease-analysis-vha4.onrender.com)

The app is built with Flask and served using Gunicorn, embedding the Tableau Public dashboards for interactive exploration.
