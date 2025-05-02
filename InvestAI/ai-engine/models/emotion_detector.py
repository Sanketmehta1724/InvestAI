from transformers import pipeline

class EmotionDetector:
    def __init__(self):
        """
        Loads a pre-trained NLP model to detect emotions in trade-related text.
        """
        self.analyzer = pipeline("text-classification", model="bhadresh-savani/distilbert-emotion")

    def analyze_emotion(self, trade_notes):
        """
        Detects emotional bias from user's trade notes (e.g., panic, greed).
        """
        result = self.analyzer(trade_notes)
        return result
