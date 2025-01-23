from database import get_connection
from services.universities import build_filters

def fetch_filtered_majors(filters):
    """
    Fetch majors with their related university names based on filters.
    """
    allowed_filters = ["degree_type", "field_of_study", "duration", "admission_type"]
    where_clause, values = build_filters(filters, allowed_filters)

    # Adjust query to include the university name
    query = """
    SELECT 
        majors.*, 
        universities.university_name 
    FROM majors 
    JOIN universities ON majors.university_id = universities.university_id
    """
    if where_clause:
        query += f" WHERE {where_clause}"

    # Execute query
    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute(query, values)
    results = cursor.fetchall()
    cursor.close()
    connection.close()

    # Process results and include university name
    return [
        {
            "major_id": row[0],
            "name": row[1],
            "degree_type": row[2],
            "field_of_study": row[3],
            "related_courses": row[4],
            "intake_periods": row[5],
            "duration": row[6],
            "major_requirements": row[7],
            "career_opportunities": row[8],
            "internship_requirements": row[9],
            "related_industries": row[10],
            "admission_type": row[11],
            "university_name": row[12],  # Include the university name
        }
        for row in results
    ]
