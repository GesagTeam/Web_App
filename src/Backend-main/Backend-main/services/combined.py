from services.universities import build_filters
from database import get_connection


def fetch_filtered_combined(filters):
    """
    Fetch combined data for universities and majors based on filters.
    Includes university names in the `majors` block.
    """
    allowed_university_filters = ["location", "institution_type", "national_ranking", "international_ranking"]
    allowed_major_filters = ["degree_type", "field_of_study", "duration", "admission_type"]

    # Build filters for universities and majors
    university_where_clause, university_values = build_filters(filters, allowed_university_filters)
    major_where_clause, major_values = build_filters(filters, allowed_major_filters)

    # Query to fetch majors with related universities
    query = """
    SELECT 
        majors.*, 
        universities.university_name 
    FROM majors 
    JOIN universities ON majors.university_id = universities.university_id
    """
    values = []

    # Add filters for majors
    if major_where_clause:
        query += f" WHERE {major_where_clause}"
        values.extend(major_values)

    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute(query, values)
    major_results = cursor.fetchall()

    # Process majors
    majors = [
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
            "university_name": row[12],  # Include university name
        }
        for row in major_results
    ]

    # Collect unique university IDs from the filtered majors
    related_university_ids = list({row[12] for row in major_results})

    # Query to fetch universities including related university IDs
    query = "SELECT * FROM universities"
    values = []

    if university_where_clause and related_university_ids:
        query += f" WHERE {university_where_clause} OR university_id = ANY(%s)"
        values.extend(university_values)
        values.append(list(related_university_ids))
    elif university_where_clause:
        query += f" WHERE {university_where_clause}"
        values.extend(university_values)
    elif related_university_ids:
        query += " WHERE university_id = ANY(%s)"
        values.append(list(related_university_ids))

    cursor.execute(query, values)
    university_results = cursor.fetchall()
    cursor.close()
    connection.close()

    # Process universities
    universities = [
        {
            "university_id": row[0],
            "university_name": row[1],
            "institution_type": row[2],
            "location": row[3],
            "national_ranking": row[4],
            "international_ranking": row[5],
            "admission_requirements": row[6],
            "tuition_fees": row[7],
            "scholarship_opportunities": row[8],
            "facilities": row[9],
            "phone_number": row[10],
            "email": row[11],
            "website": row[12],
            "application_deadlines": row[13],
            "intake_periods": row[14],
        }
        for row in university_results
    ]

    return {"majors": majors, "universities": universities}
