from database import get_connection

def build_filters(query_params, allowed_filters):
    filters = []
    values = []

    for param, value in query_params.items():
        if param in allowed_filters:
            if param == "location":
                # Case-insensitive partial match for location
                filters.append(f"{param} ILIKE %s")
                values.append(f"%{value}%")
            else:
                filters.append(f"{param} = %s")
                values.append(value)
        elif param.endswith("_lt") and param[:-3] in allowed_filters:
            filters.append(f"{param[:-3]} < %s")
            values.append(value)
        elif param.endswith("_gt") and param[:-3] in allowed_filters:
            filters.append(f"{param[:-3]} > %s")
            values.append(value)

    return " AND ".join(filters), values


def fetch_filtered_universities(filters):
    """
    Fetch universities based on filters.
    """
    allowed_filters = [
        "location", "institution_type", "national_ranking", "international_ranking"
    ]
    where_clause, values = build_filters(filters, allowed_filters)

    query = "SELECT * FROM universities"
    if where_clause:
        query += f" WHERE {where_clause}"

    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute(query, values)
    results = cursor.fetchall()
    cursor.close()
    connection.close()

    return [
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
        for row in results
    ]
