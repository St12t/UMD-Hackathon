# app.py

from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static', static_folder='Frontend', template_folder='.')

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
