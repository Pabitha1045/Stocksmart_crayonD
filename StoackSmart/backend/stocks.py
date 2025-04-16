# stocks.py
import requests
import os

POLYGON_API_KEY = os.getenv("POLYGON_API_KEY")

def get_stock_quote(symbol):
    url = f"https://api.polygon.io/v2/last/trade/{symbol.upper()}?apiKey={POLYGON_API_KEY}"
    response = requests.get(url)
    if response.status_code != 200:
        return None
    data = response.json()
    return {
        "symbol": symbol.upper(),
        "price": data.get("results", {}).get("p"),
        "timestamp": data.get("results", {}).get("t")
    }
