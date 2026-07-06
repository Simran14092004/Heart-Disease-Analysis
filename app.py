from flask import Flask, render_template

app = Flask(__name__)

TABLEAU_BASE = "https://public.tableau.com/views/HeartDiseaseWorkBook"

VISUALIZATIONS = [
    {
        "id": "viz-gender",
        "title": "Gender vs Heart Disease",
        "view": "Sheet1GendervsHeartDisease",
        "description": "Explores how heart disease prevalence differs between male and female patients, "
                       "revealing key gender-based risk patterns across the dataset.",
    },
    {
        "id": "viz-race",
        "title": "Race-wise Heart Disease",
        "view": "Sheet6RacewiseHeartDisease",
        "description": "Breaks down heart disease occurrence across different racial groups, "
                       "highlighting demographic disparities in cardiovascular health.",
    },
    {
        "id": "viz-general-health",
        "title": "General Health vs Heart Disease",
        "view": "Sheet7GeneralHealthvsHeartDisease",
        "description": "Compares self-reported general health ratings with heart disease diagnosis rates "
                       "to understand how perceived health correlates with actual conditions.",
    },
    {
        "id": "viz-physical",
        "title": "Physical Activity vs Heart Disease",
        "view": "Sheet8PhysicalActivityVsHeartDisease",
        "description": "Analyzes whether regular physical activity reduces heart disease risk, "
                       "comparing active and inactive patient populations.",
    },
    {
        "id": "viz-smoking",
        "title": "Smoking & Alcohol vs Heart Disease",
        "view": "Sheet4ImpactofSmokingandAlcoholonHeartDisease",
        "description": "Examines the combined impact of smoking habits and alcohol consumption "
                       "on the likelihood of developing heart disease.",
    },
    {
        "id": "viz-age-bmi",
        "title": "Age vs Diabetes vs BMI",
        "view": "Sheet9AgeVsDiabeticVsBMI",
        "description": "Investigates the three-way relationship between patient age, BMI categories, "
                       "and diabetes status in the context of heart disease risk.",
    },
    {
        "id": "viz-age-hd",
        "title": "Age vs Heart Disease",
        "view": "Sheet2AgevsHeartDisease",
        "description": "Shows how heart disease prevalence increases with age, "
                       "mapping disease distribution across different age categories.",
    },
    {
        "id": "viz-diabetic-stroke",
        "title": "Diabetic vs Stroke",
        "view": "Sheet3DiabeticvsHeartStroke",
        "description": "Explores the correlation between diabetes and stroke incidence, "
                       "illuminating shared risk factors and co-morbidity patterns.",
    },
    {
        "id": "viz-stroke-disease",
        "title": "Stroke vs Other Diseases",
        "view": "Sheet5StrokevsOtherDisease",
        "description": "Compares stroke rates against other chronic conditions such as asthma, "
                       "kidney disease, and skin cancer to identify overlapping risk factors.",
    },
    {
        "id": "viz-triple",
        "title": "Stroke + Diabetes + Heart Disease",
        "view": "Sheet10PeopleGotStrokeSufferingfromDiabetesandHeartDisease",
        "description": "A comprehensive view of patients simultaneously suffering from stroke, "
                       "diabetes, and heart disease, revealing the most complex comorbidity cases.",
    },
]

DASHBOARDS = [
    {
        "id": "db1",
        "title": "Executive Overview",
        "view": "Dashboard1",
        "icon": "bi-speedometer2",
        "color": "#1e88e5",
        "description": "A high-level overview of patient demographics, key health metrics, "
                       "and overall heart disease distribution across the entire dataset.",
    },
    {
        "id": "db2",
        "title": "Lifestyle & Risk Factors",
        "view": "Dashboard2",
        "icon": "bi-activity",
        "color": "#43a047",
        "description": "Deep-dive into lifestyle contributors — smoking, BMI, alcohol consumption, "
                       "and physical activity — and their correlation with heart disease risk.",
    },
    {
        "id": "db3",
        "title": "Disease Correlation",
        "view": "Dashboard3",
        "icon": "bi-diagram-3",
        "color": "#8e24aa",
        "description": "Investigates the complex relationships between heart disease, stroke, "
                       "and diabetes to uncover shared risk patterns and comorbidities.",
    },
]

TABLEAU_PARAMS = "?:language=en-US&:display_count=n&:origin=viz_share_link&:embed=y&:toolbar=no&:showVizHome=no"


@app.route("/")
def index():
    return render_template(
        "index.html",
        tableau_base=TABLEAU_BASE,
        tableau_params=TABLEAU_PARAMS,
        visualizations=VISUALIZATIONS,
        dashboards=DASHBOARDS,
    )


if __name__ == "__main__":
    app.run(debug=True, port=5000)
