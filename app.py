from flask import Flask, jsonify
import requests
from dotenv import load_dotenv
import os

app = Flask(__name__)

load_dotenv()
# Nessie API key and base URL
API_KEY = os.getenv('832060a218e738937c74b55f9ca4524f')
BASE_URL = 'http://api.nessieisreal.com'

# Route to retrieve customers from Nessie API
@app.route('/customers', methods=['GET'])
def get_customers():
    # Construct the URL to retrieve customers
    url = f'http://api.nessieisreal.com/enterprise/bills?key=832060a218e738937c74b55f9ca4524f'

    # Make a request to the Nessie API
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        customers = response.json()
        return jsonify(customers), 200
    else:
        return jsonify({"error": "Failed to retrieve customers"}), response.status_code



# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True,port ='5001')
