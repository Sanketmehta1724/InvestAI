import numpy as np

class TradeAnalyzer:
    def __init__(self, trade_history):
        """
        Initializes with user's trade history.
        """
        self.trade_history = trade_history

    def evaluate_trades(self):
        """
        Analyzes past trades to detect risky patterns.
        """
        returns = np.diff(self.trade_history)  # Calculate returns
        risk_score = np.std(returns)  # Measure volatility (risk)

        return {
            "risk_score": risk_score,
            "suggestion": "Reduce high-risk trades." if risk_score > 0.5 else "Good strategy!"
        }
