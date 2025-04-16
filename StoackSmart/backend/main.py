from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from agent import generate_response

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat(request: Request):
    body = await request.json()
    user_input = body.get("message", "")
    response = await generate_response(user_input)
    return {"response": response}
