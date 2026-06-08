from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {
        "message": "Welcome to ShopHub API"
    }

@app.get("/products")
def get_all_products():
    return [
        {
            "id": 1,
            "name": "Laptop"
        },
        {
            "id": 2,
            "name": "Mouse"
        }
    ]
