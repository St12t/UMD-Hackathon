from flask import Flask, jsonify
import requests

app = Flask(__name__)

# Nessie API key and base URL
API_KEY = '832060a218e738937c74b55f9ca4524f'
BASE_URL = 'http://api.nessieisreal.com'

# Route to retrieve customers from Nessie API
@app.route('/customers', methods=['GET'])
def get_customers():
    # Construct the URL to retrieve customers
    url = f'{BASE_URL}/customers?key={API_KEY}'

    # Make a request to the Nessie API
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        customers = response.json()
        return jsonify(customers), 200
    else:
        return jsonify({"error": "Failed to retrieve customers"}), response.status_code


# Route to retrieve a specific customer by ID
@app.route('/customer/<customer_id>', methods=['GET'])
def get_customer_by_id(customer_id):
    # Construct the URL to retrieve a customer by their ID
    url = f'{BASE_URL}/customers/{customer_id}?key={API_KEY}'

    # Make a request to the Nessie API
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        customer = response.json()
        return jsonify(customer), 200
    else:
        return jsonify({"error": "Failed to retrieve customer"}), response.status_code


# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
