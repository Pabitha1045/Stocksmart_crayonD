# Currently unused, but for future expansion
chat_history = {}

def save_to_memory(user_id: str, message: str):
    if user_id not in chat_history:
        chat_history[user_id] = []
    chat_history[user_id].append(message)

def get_history(user_id: str):
    return chat_history.get(user_id, [])
