import re

def extract_stock_or_sector(text: str):
    sectors = ["tech", "technology", "healthcare", "finance", "energy", "consumer", "industrial", "utilities"]
    stock_match = re.search(r"\b[A-Z]{1,5}\b", text)  # Matches stock tickers like AAPL, TSLA

    for sector in sectors:
        if sector.lower() in text.lower():
            return sector.capitalize()

    if stock_match:
        return stock_match.group(0)

    return None
