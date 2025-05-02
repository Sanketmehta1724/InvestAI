import openai
import os

class FinancialAdvisor:
    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY")  # Set OpenAI API Key in environment variables

    def get_advice(self, user_profile, market_data):
        """
        Generates AI-powered investment advice based on user profile & market trends.
        """
        prompt = f"""
        User Profile: {user_profile}
        Market Data: {market_data}
        Based on this information, provide a detailed investment recommendation.
        """

        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "system", "content": prompt}],
            api_key=self.api_key
        )

        return response["choices"][0]["message"]["content"]
