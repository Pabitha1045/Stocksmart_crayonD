import requests

NEWS_API_KEY = "pub_8082564af163d79e9823529bcaedb16613427"  # Replace this with your actual key

def get_financial_news(topic: str, limit: int = 5):
    url = (
        f"https://newsapi.org/v2/everything?"
        f"q={topic}+stock+market&"
        f"language=en&"
        f"sortBy=publishedAt&"
        f"apiKey={NEWS_API_KEY}"
    )
    response = requests.get(url)
    data = response.json()

    if "articles" not in data:
        return []

    headlines = [article["title"] for article in data["articles"][:limit]]
    return headlines
