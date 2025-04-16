from tools.news_tool import get_financial_news
from filters import extract_stock_or_sector

async def generate_response(user_input: str) -> str:
    topic = extract_stock_or_sector(user_input)

    if not topic:
        return "Please ask about a specific stock, company, or sector in the market."

    try:
        news = get_financial_news(topic)
        if news:
            return f"Here’s the latest analysis on **{topic}**:\n\n" + "\n\n".join([f"- {n}" for n in news])
        else:
            return f"Sorry, I couldn't find any recent news about **{topic}**."
    except Exception as e:
        return f"An error occurred while fetching news: {str(e)}"
