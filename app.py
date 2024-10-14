from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="test",
    database="electronics_store"
)


@app.route('/products', methods=['GET'])
def get_products():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    return jsonify(products)

@app.route('/add_product', methods=['POST'])
def add_product():
    data = request.json
    name = data['name']
    description = data['description']
    price = data['price']
    stock = data['stock']
    
    cursor = db.cursor()
    cursor.execute("""
        INSERT INTO products (name, description, price, stock) 
        VALUES (%s, %s, %s, %s)
    """, (name, description, price, stock))
    db.commit()
    return jsonify({"message": "Product added successfully!"}), 201



if __name__ == '__main__':
    app.run(debug=True)
