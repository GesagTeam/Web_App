from flask import Flask, request, jsonify
from services.universities import fetch_filtered_universities
from services.majors import fetch_filtered_majors
from services.combined import fetch_filtered_combined

app = Flask(__name__)

@app.route('/universities', methods=['GET'])
def get_universities():
    filters = request.args.to_dict()
    universities = fetch_filtered_universities(filters)
    return jsonify(universities)

@app.route('/majors', methods=['GET'])
def get_majors():
    filters = request.args.to_dict()
    majors = fetch_filtered_majors(filters)
    return jsonify(majors)

@app.route('/all-data', methods=['GET'])
def get_combined_data():
    filters = request.args.to_dict()
    combined_data = fetch_filtered_combined(filters)
    return jsonify(combined_data)

if __name__ == '__main__':
    app.run(debug=True)
