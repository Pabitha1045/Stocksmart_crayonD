import yfinance as yf

def get_stock_quote(symbol: str) -> str:
    try:
        stock = yf.Ticker(symbol)
        data = stock.history(period="1d")
        price = data["Close"].iloc[-1]
        return f"📈 {symbol.upper()} is currently trading at ${price:.2f}"
    except Exception:
        return "Couldn't retrieve stock data. Please check the symbol."
