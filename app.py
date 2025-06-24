import openai
import os

# Set your API key
openai.api_key = os.getenv("OPENAI_API_KEY")  # Recommended way
# Or hardcode (not recommended): openai.api_key = "your-api-key"

# Choose the specific model version
model_version = "gpt-4-0613"  # You can also use "gpt-4o", "gpt-4-turbo", etc.

response = openai.ChatCompletion.create(
    model=model_version,
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What's the weather like on Mars?"}
    ],
    temperature=0.7,
)

print(response["choices"][0]["message"]["content"])
