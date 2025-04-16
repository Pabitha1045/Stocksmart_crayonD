# utils.py
import os
import requests

NEWS_API_KEY = os.getenv("NEWS_API_KEY")
FINANCE_API_KEY = os.getenv("FINANCE_API_KEY")  # e.g., Polygon.io or another

def get_stock_price(query: str) -> str:
    # You can improve this by extracting the symbol using NLP
    try:
        symbol = query.strip().upper()  # very basic symbol extraction
        url = f"https://api.polygon.io/v1/last/stocks/{symbol}?apiKey={FINANCE_API_KEY}"
        res = requests.get(url)
        data = res.json()

        if 'last' in data:
            price = data['last']['price']
            return f"Current price for {symbol} is ${price:.2f}"
        return ""
    except Exception as e:
        print("Error fetching stock price:", e)
        return ""

def get_financial_news(query: str) -> str:
    try:
        response = requests.get(
            "https://newsapi.org/v2/everything",
            params={"q": query, "language": "en", "sortBy": "publishedAt", "apiKey": NEWS_API_KEY},
        )
        data = response.json()
        articles = data.get("articles", [])[:3]
        if not articles:
            return ""

        reply = "Related financial news:\n"
        for article in articles:
            reply += f"- {article['title']} ({article['source']['name']})\n"
        return reply.strip()
    except Exception as e:
        print("Error fetching news:", e)
        return ""
