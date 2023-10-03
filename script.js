const questions = [
    {
    question: "What is the primary purpose of a strategy in the context of business management?",
    answers: [
      { text: "To complicate decision-making processes", correct: false },
      { text: "To act as a heuristic and pool knowledge", correct: true },
      { text: "To create chaos and unpredictability", correct: false },
      { text: "To confuse competitors", correct: false },
    ]
  },
  {
    question: "How does a tactic differ from a strategy?",
    answers: [
      { text: "Tactic involves long-term planning, while strategy focuses on short-term actions", correct: false },
      { text: "Strategy is about winning battles, while tactics are about winning wars", correct: true },
      { text: "There is no difference between strategy and tactic", correct: false },
      { text: "Tactic is the overall plan, while strategy is a specific action scheme", correct: false },
    ]
  },
  {
    question: "Which decade marks the emergence of strategic management as a distinct concept?",
    answers: [
      { text: "1950s", correct: false },
      { text: "1960s", correct: false },
      { text: "1970s", correct: true },
      { text: "1980s", correct: false },
    ]
  },
  {
    question: "Why do humans need strategies according to the notes?",
    answers: [
      { text: "To complicate decision-making processes", correct: false },
      { text: "To act as a source of chaos", correct: false },
      { text: "To simplify decision-making and pool knowledge", correct: true },
      { text: "To make decisions randomly", correct: false },
    ]
  },
  {
    question: "What is the central theme in the evolution of strategic management?",
    answers: [
      { text: "Adapting to Turbulence", correct: false },
      { text: "Corporate Planning", correct: false },
      { text: "The Quest for Competitive Advantage", correct: true },
      { text: "Financial Budgeting", correct: false },
    ]
  },
  {
    question: "What are the elements that, when coupled with effective implementation, lead to successful strategies?",
    answers: [
      { text: "Clear, consistent short-term goals", correct: false },
      { text: "Ambiguous understanding of the competitive environment", correct: false },
      { text: "Objective appraisal of resources", correct: true },
      { text: "A and C", correct: false },
    ]
  },
  {
    question: "Strategic Fit, in the context of a firm's strategy, refers to:",
    answers: [
      { text: "Consistency of a firm's strategy with external and internal environments", correct: true },
      { text: "Competing in a chaotic and unpredictable manner", correct: false },
      { text: "Creating unrelated and disconnected activities", correct: false },
      { text: "Having no connection between a firm's goals and values", correct: false },
    ]
  },
  {
    question: "What is the primary focus of corporate strategy?",
    answers: [
      { text: "Where to compete", correct: true },
      { text: "How to compete", correct: false },
      { text: "When to compete", correct: false },
      { text: "Why to compete", correct: false },
    ]
  },
  {
    question: "How is strategy described in terms of its dynamic dimension?",
    answers: [
      { text: "Strategy as Positioning", correct: false },
      { text: "Strategy as a Direction", correct: true },
      { text: "Strategy as a Reaction", correct: false },
      { text: "Strategy as a Stagnation", correct: false },
    ]
  },
  {
    question: "What does the Basic Framework for Strategy Analysis link?",
    answers: [
      { text: "The firm with its customers", correct: false },
      { text: "The firm with its competitors", correct: false },
      { text: "The firm with its structure and systems", correct: false },
      { text: "The firm with the industry environment", correct: true },
    ]
  },
  {
    question: "What does the static dimension of strategy focus on?",
    answers: [
      { text: "Where to compete", correct: false },
      { text: "How to compete", correct: false },
      { text: "What to achieve", correct: true },
      { text: "When to compete", correct: false },
    ]
  },
  {
    question: "According to Porter, what must activities in a firm's strategy do?",
    answers: [
      { text: "Be unrelated and inconsistent", correct: false },
      { text: "Fit together to form a consistent, mutually reinforcing system", correct: true },
      { text: "Operate independently of each other", correct: false },
      { text: "Have no correlation with the industry environment", correct: false },
    ]
  },
  {
    question: "What does the rate of profit above the cost of capital lead to, according to the notes?",
    answers: [
      { text: "Financial Budgeting", correct: false },
      { text: "Corporate Strategy", correct: true },
      { text: "Tactical Maneuvers", correct: false },
      { text: "Business Strategy", correct: false },
    ]
  },
  {
    question: "What is the value of analytical strategy analysis?",
    answers: [
      { text: "Provides definitive answers", correct: false },
      { text: "Improves the decision process but doesn't give answers", correct: true },
      { text: "Adds complexity to decision-making", correct: false },
      { text: "Restricts flexibility and innovation", correct: false },
    ]
  },
  {
    question: "Which element is NOT mentioned as a common element of successful strategies?",
    answers: [
      { text: "Clear, consistent long-term goals", correct: false },
      { text: "Objective appraisal of resources", correct: false },
      { text: "Ambiguous understanding of the competitive environment", correct: true },
      { text: "Profound understanding of the competitive environment", correct: false },
    ]
  },
  {
    question: "Which decade is associated with the emergence of corporate planning?",
    answers: [
      { text: "1950s", correct: false },
      { text: "1960s", correct: true },
      { text: "1970s", correct: false },
      { text: "1980s", correct: false },
    ]
  },
  {
    question: "What is the primary focus of business strategy?",
    answers: [
      { text: "Where to compete", correct: true },
      { text: "How to compete", correct: false },
      { text: "When to compete", correct: false },
      { text: "Why to compete", correct: false },
    ]
  },
  {
    question: "How does strategy act as a decision support?",
    answers: [
      { text: "By complicating decision-making", correct: false },
      { text: "By simplifying decision-making", correct: true },
      { text: "By adding chaos to decision-making", correct: false },
      { text: "By making decisions randomly", correct: false },
    ]
  },
  {
    question: "What is the purpose of strategy as a target?",
    answers: [
      { text: "To create confusion", correct: false },
      { text: "To motivate aspiration", correct: true },
      { text: "To hinder goal setting", correct: false },
      { text: "To complicate decision-making", correct: false },
    ]
  },
    {
    question: "What are the two primary ways of value creation mentioned in the notes?",
    answers: [
      { text: "Innovation and Marketing", correct: false },
      { text: "Production and Commerce", correct: true },
      { text: "Advertising and Sales", correct: false },
      { text: "Research and Development", correct: false },
    ],
  },
  {
    question: "How is Consumer Surplus defined in the context of value creation?",
    answers: [
      { text: "Maximum willingness to pay minus Costs", correct: false },
      { text: "Price minus Costs", correct: false },
      { text: "Maximum willingness to pay minus Price", correct: true },
      { text: "Price minus Maximum willingness to pay", correct: false },
    ],
  },
  {
    question: "Which stakeholders' interests are explicitly mentioned in the notes?",
    answers: [
      { text: "Shareholders and Government", correct: false },
      { text: "Employees and Customers", correct: false },
      { text: "Owners and Lenders", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What does the formula 'Value Created = Maximum willingness to pay (B) – Costs (C)' imply?",
    answers: [
      { text: "Maximum profit is achieved when Costs are minimized", correct: false },
      { text: "Maximum profit is achieved when Maximum willingness to pay is minimized", correct: false },
      { text: "Value is created when Maximum willingness to pay exceeds Costs", correct: true },
      { text: "Value is created when Costs exceed Maximum willingness to pay", correct: false },
    ],
  },
  {
    question: "In perfect competition, what happens to economic value?",
    answers: [
      { text: "Firms make zero profit, and consumers capture all economic value", correct: true },
      { text: "Firms make maximum profit, and consumers capture no economic value", correct: false },
      { text: "Firms and consumers equally share economic value", correct: false },
      { text: "Economic value is not relevant in perfect competition", correct: false },
    ],
  },
  {
    question: "What is the condition for a product to be economically viable?",
    answers: [
      { text: "B-C < 0", correct: false },
      { text: "B-C > 0", correct: true },
      { text: "B-C = 0", correct: false },
      { text: "B+C > 0", correct: false },
    ],
  },
  {
    question: "What is the key difference between competitive advantage and sustainable competitive advantage?",
    answers: [
      { text: "Competitive advantage focuses on profit, while sustainable competitive advantage focuses on value", correct: true },
      { text: "Competitive advantage is short-term, while sustainable competitive advantage is long-term", correct: false },
      { text: "Competitive advantage can be easily replicated, while sustainable competitive advantage cannot", correct: false },
      { text: "There is no difference between competitive advantage and sustainable competitive advantage", correct: false },
    ],
  },
  {
    question: "What does Tobin's Q measure, according to the notes?",
    answers: [
      { text: "Market value of the firm", correct: true },
      { text: "Consumer surplus", correct: false },
      { text: "Producer surplus", correct: false },
      { text: "Maximum willingness to pay", correct: false },
    ],
  },
  {
    question: "To maximize its value, what must a firm focus on, according to the notes?",
    answers: [
      { text: "Maximizing past net cash flows", correct: false },
      { text: "Minimizing future risks", correct: false },
      { text: "Maximizing future net cash flows and managing risks to minimize cost of capital", correct: true },
      { text: "Maximizing profit in the current fiscal year", correct: false },
    ],
  },
  {
    question: "What is the essential step for a strategist to evaluate profitability, according to the notes?",
    answers: [
      { text: "Rely on a single measure for firm evaluation", correct: false },
      { text: "Avoid triangulating different measures", correct: false },
      { text: "Analyze performance measures longitudinally", correct: true },
      { text: "Focus only on backward-looking performance measures", correct: false },
    ],
  },
  {
    question: "What does the DuPont financial disaggregation tool help identify?",
    answers: [
      { text: "Sources of poor performance", correct: true },
      { text: "Maximum willingness to pay", correct: false },
      { text: "Forward-looking measures", correct: false },
      { text: "Balanced scorecard metrics", correct: false },
    ],
  },
  {
    question: "What is the potential disadvantage of using historical information for strategy formulation?",
    answers: [
      { text: "Historical information is always inaccurate", correct: false },
      { text: "Historical information is not relevant", correct: false },
      { text: "Forward-looking measures become less useful", correct: false },
      { text: "Strategy may not adapt to current market conditions", correct: true },
    ],
  },
  {
    question: "Which of the following is NOT mentioned as a performance target development tool?",
    answers: [
      { text: "Financial disaggregation", correct: false },
      { text: "Balanced scorecard", correct: false },
      { text: "Strategic profit drivers", correct: false },
      { text: "Stock market value", correct: true },
    ],
  },
  {
    question: "What does the formula 'B-C > 0 does not imply profit > 0' signify?",
    answers: [
      { text: "Profit is guaranteed when B-C > 0", correct: false },
      { text: "Profit is not guaranteed when B-C > 0", correct: true },
      { text: "Profit is guaranteed when B-C < 0", correct: false },
      { text: "Profit is guaranteed when B+C > 0", correct: false },
    ],
  },
  {
    question: "What is the purpose of backward-looking performance measures?",
    answers: [
      { text: "Predict future performance", correct: false },
      { text: "Measure success in using total assets to generate profits", correct: false },
      { text: "Evaluate firm performance based on financials", correct: true },
      { text: "Assess the market value of the firm", correct: false },
    ],
  },
  {
    question: "How is the debate regarding value distribution framed in the notes?",
    answers: [
      { text: "Maximizing shareholders' interests versus minimizing stakeholders' interests", correct: true },
      { text: "Maximizing stakeholders' interests versus minimizing shareholders' interests", correct: false },
      { text: "Maximizing profit versus maximizing cost", correct: false },
      { text: "Maximizing cost versus maximizing value", correct: false },
    ],
  },
  {
    question: "What does the term 'B-C' represent in the context of competitive advantage?",
    answers: [
      { text: "Maximum willingness to pay", correct: false },
      { text: "Consumer surplus", correct: false },
      { text: "Producer surplus", correct: false },
      { text: "Economic value", correct: true },
    ],
  },
  {
    question: "Which stakeholders are mentioned in the notes as having interests in value creation?",
    answers: [
      { text: "Customers and Suppliers", correct: false },
      { text: "Employees and Lenders", correct: true },
      { text: "Owners and Shareholders", correct: false },
      { text: "Government and Landlords", correct: false },
    ],
  },
  {
    question: "In perfect competition, what happens to profit?",
    answers: [
      { text: "Firms make maximum profit", correct: false },
      { text: "Firms make zero profit", correct: true },
      { text: "Firms make negative profit", correct: false },
      { text: "Profit is not relevant in perfect competition", correct: false },
    ],
  },
  {
    question: "What is the role of the Tobin's Q measure in comparing firms?",
    answers: [
      { text: "It measures consumer surplus", correct: false },
      { text: "It measures producer surplus", correct: false },
      { text: "It is more suitable for comparing firms than market value", correct: true },
      { text: "It is less suitable for comparing firms than market value", correct: false },
    ],
  },
    {
    question: "What is the primary distinction between production and commerce in the context of value creation?",
    answers: [
      { text: "Production involves physical transformation, while commerce involves financial transactions", correct: false },
      { text: "Production focuses on financial transactions, while commerce involves physical transformation", correct: false },
      { text: "Production involves physical transformation of products, while commerce involves repositioning products in space and time", correct: true },
      { text: "Production and commerce are synonymous terms", correct: false },
    ],
  },
  {
    question: "Which of the following stakeholders is NOT mentioned in the notes as having interests in value creation?",
    answers: [
      { text: "Suppliers", correct: true },
      { text: "Lenders", correct: false },
      { text: "Owners", correct: false },
      { text: "Customers", correct: false },
    ],
  },
  {
    question: "What does the term 'Sustainable competitive advantage' imply?",
    answers: [
      { text: "Competitive advantage that can be easily replicated", correct: false },
      { text: "Competitive advantage that is short-term", correct: false },
      { text: "Competitive advantage that focuses on profit", correct: false },
      { text: "Competitive advantage that competitors cannot easily replicate", correct: true },
    ],
  },
  {
    question: "How is 'Value Created' defined in the notes?",
    answers: [
      { text: "Maximum willingness to pay minus Costs", correct: false },
      { text: "Maximum willingness to pay plus Costs", correct: false },
      { text: "Maximum willingness to pay multiplied by Costs", correct: false },
      { text: "Maximum willingness to pay minus Costs", correct: true },
    ],
  },
  {
    question: "What is the condition for a product to be economically viable, according to the notes?",
    answers: [
      { text: "B-C < 0", correct: false },
      { text: "B+C > 0", correct: false },
      { text: "B-C > 0", correct: true },
      { text: "B-C = 0", correct: false },
    ],
  },
  {
    question: "Which measure is considered more suitable for comparing firms, according to the notes?",
    answers: [
      { text: "Market value of the firm", correct: false },
      { text: "Consumer surplus", correct: false },
      { text: "Tobin's Q", correct: true },
      { text: "Producer surplus", correct: false },
    ],
  },
  {
    question: "What must a firm focus on to maximize its value, according to the notes?",
    answers: [
      { text: "Maximizing past net cash flows", correct: false },
      { text: "Maximizing profit in the current fiscal year", correct: false },
      { text: "Minimizing future risks", correct: false },
      { text: "Maximizing future net cash flows and managing risks to minimize cost of capital", correct: true },
    ],
  },
  {
    question: "What is the role of backward-looking performance measures?",
    answers: [
      { text: "Predict future performance", correct: false },
      { text: "Measure success in using total assets to generate profits", correct: false },
      { text: "Evaluate firm performance based on financials", correct: true },
      { text: "Assess the market value of the firm", correct: false },
    ],
  },
  {
    question: "In the debate about value distribution, what are the two sides framed as?",
    answers: [
      { text: "Maximizing profit versus maximizing cost", correct: false },
      { text: "Maximizing stakeholders' interests versus minimizing shareholders' interests", correct: true },
      { text: "Maximizing cost versus maximizing value", correct: false },
      { text: "Maximizing shareholders' interests versus minimizing stakeholders' interests", correct: false },
    ],
  },
  {
    question: "What does the formula 'B-C > 0 does not imply profit > 0' signify?",
    answers: [
      { text: "Profit is guaranteed when B-C > 0", correct: false },
      { text: "Profit is not guaranteed when B-C > 0", correct: true },
      { text: "Profit is guaranteed when B-C < 0", correct: false },
      { text: "Profit is guaranteed when B+C > 0", correct: false },
    ],
  },
  {
    question: "How is the value added distributed in the debate about maximizing shareholders' versus stakeholders' interests?",
    answers: [
      { text: "Equally among all stakeholders", correct: false },
      { text: "Primarily to maximize shareholders' interests", correct: true },
      { text: "Primarily to maximize stakeholders' interests", correct: false },
      { text: "Randomly among stakeholders", correct: false },
    ],
  },
  {
    question: "What is the potential disadvantage of using historical information for strategy formulation?",
    answers: [
      { text: "Historical information is always inaccurate", correct: false },
      { text: "Historical information is not relevant", correct: false },
      { text: "Forward-looking measures become less useful", correct: false },
      { text: "Strategy may not adapt to current market conditions", correct: true },
    ],
  },
  {
    question: "What does the DuPont financial disaggregation tool help identify?",
    answers: [
      { text: "Sources of poor performance", correct: true },
      { text: "Maximum willingness to pay", correct: false },
      { text: "Forward-looking measures", correct: false },
      { text: "Balanced scorecard metrics", correct: false },
    ],
  },
  {
    question: "Which stakeholders are mentioned in the notes as having interests in value creation?",
    answers: [
      { text: "Customers and Suppliers", correct: false },
      { text: "Employees and Lenders", correct: true },
      { text: "Owners and Shareholders", correct: false },
      { text: "Government and Landlords", correct: false },
    ],
  },
  {
    question: "In perfect competition, what happens to profit?",
    answers: [
      { text: "Firms make maximum profit", correct: false },
      { text: "Firms make zero profit", correct: true },
      { text: "Firms make negative profit", correct: false },
      { text: "Profit is not relevant in perfect competition", correct: false },
    ],
  },
  {
    question: "What is the role of the Tobin's Q measure in comparing firms?",
    answers: [
      { text: "It measures consumer surplus", correct: false },
      { text: "It measures producer surplus", correct: false },
      { text: "It is more suitable for comparing firms than market value", correct: true },
      { text: "It is less suitable for comparing firms than market value", correct: false },
    ],
  },
    {
    question: "What is the primary focus of the SCP paradigm in industry analysis?",
    answers: [
      { text: "Firm conduct within the industry", correct: false },
      { text: "Industry structure and its impact on firm conduct and performance", correct: true },
      { text: "Market segmentation criteria", correct: false },
      { text: "Determining the level of competition", correct: false },
    ],
  },
  {
    question: "What is the main purpose of industry analysis, as mentioned in the notes?",
    answers: [
      { text: "To maximize shareholder interests", correct: false },
      { text: "To evaluate firm-level factors", correct: false },
      { text: "To assess industry attractiveness and understand industry structure", correct: true },
      { text: "To minimize stakeholder interests", correct: false },
    ],
  },
  {
    question: "What is a key assumption about industry structure in industry analysis?",
    answers: [
      { text: "It is continuously changing", correct: false },
      { text: "It is dynamic and unpredictable", correct: false },
      { text: "It is assumed to be fairly stable", correct: true },
      { text: "It has no impact on firm performance", correct: false },
    ],
  },
  {
    question: "What is the main objective of assessing industry attractiveness?",
    answers: [
      { text: "To maximize firm conduct", correct: false },
      { text: "To identify key success factors", correct: true },
      { text: "To minimize industry structure", correct: false },
      { text: "To forecast future profitability", correct: false },
    ],
  },
  {
    question: "What is the first step for industry analysis according to Porter's 5 Forces?",
    answers: [
      { text: "Identify key success factors", correct: false },
      { text: "Analyze industry rivalry", correct: false },
      { text: "Identify the industry and market", correct: true },
      { text: "Forecast future profitability", correct: false },
    ],
  },
  {
    question: "How is market defined in contrast to the industry?",
    answers: [
      { text: "Market is a subset of an industry", correct: false },
      { text: "Market is the same as an industry", correct: false },
      { text: "Market is the segmentation of an industry based on various criteria", correct: true },
      { text: "Market and industry are interchangeable terms", correct: false },
    ],
  },
  {
    question: "What is the primary principle used to define industries or markets?",
    answers: [
      { text: "Market concentration", correct: false },
      { text: "Barriers to entry", correct: false },
      { text: "Substitutability", correct: true },
      { text: "Industry rivalry", correct: false },
    ],
  },
  {
    question: "How is the intensity of rivalry measured in industry analysis?",
    answers: [
      { text: "Number of firms competing in a market", correct: false },
      { text: "Market share of the largest firms", correct: true },
      { text: "Diversity of competitors", correct: false },
      { text: "Product differentiation", correct: false },
    ],
  },
  {
    question: "What is the Herfindahl index used for in industry analysis?",
    answers: [
      { text: "Measuring market concentration", correct: true },
      { text: "Forecasting future profitability", correct: false },
      { text: "Assessing industry attractiveness", correct: false },
      { text: "Identifying key success factors", correct: false },
    ],
  },
  {
    question: "What determines the strength of entry barriers in industry analysis?",
    answers: [
      { text: "Market share of the largest firms", correct: false },
      { text: "Diversity of competitors", correct: false },
      { text: "Number of firms in the market", correct: false },
      { text: "Capital requirements, economies of scale, and legal barriers", correct: true },
    ],
  },
  {
    question: "What is analogous to buyer power in industry analysis?",
    answers: [
      { text: "Barriers to entry", correct: false },
      { text: "Herfindahl index", correct: false },
      { text: "Threat of entry", correct: false },
      { text: "Supplier power", correct: true },
    ],
  },
  {
    question: "What is a determinant of buyer power in industry analysis?",
    answers: [
      { text: "Barriers to entry", correct: false },
      { text: "Market concentration", correct: false },
      { text: "Bargaining power and size of buyers", correct: true },
      { text: "Threat of entry", correct: false },
    ],
  },
  {
    question: "What does the threat of substitution in industry analysis refer to?",
    answers: [
      { text: "Buyers' propensity to switch suppliers", correct: false },
      { text: "Buyers' propensity to substitute a firm's product with other products", correct: true },
      { text: "The entry of new firms", correct: false },
      { text: "The exit of existing firms", correct: false },
    ],
  },
  {
    question: "What does supplier power refer to in industry analysis?",
    answers: [
      { text: "Bargaining power of buyers", correct: false },
      { text: "Bargaining power of suppliers", correct: true },
      { text: "Intensity of industry rivalry", correct: false },
      { text: "Threat of entry", correct: false },
    ],
  },
  {
    question: "What is a limitation of industry analysis mentioned in the notes?",
    answers: [
      { text: "It provides a dynamic perspective", correct: false },
      { text: "It includes interaction among competitors", correct: false },
      { text: "It has a reverse causality", correct: false },
      { text: "It assumes a static perspective and neglects interaction among competitors", correct: true },
    ],
  },
  {
    question: "What is a potential issue with defining industry boundaries in industry analysis?",
    answers: [
      { text: "Industry boundaries are always well-defined", correct: false },
      { text: "Industry boundaries depend on firm-level factors", correct: false },
      { text: "Industry boundaries are static", correct: false },
      { text: "Industry boundaries vary depending on objectives", correct: true },
    ],
  },
  {
    question: "What does the SCP paradigm primarily assume about firms' profits?",
    answers: [
      { text: "Firms' profits depend on firm-level factors", correct: true },
      { text: "Firms' profits are solely determined by industry structure", correct: false },
      { text: "Firms' profits are not influenced by industry structure", correct: false },
      { text: "Firms' profits are static and unchanging", correct: false },
    ],
  },
  {
    question: "What is a criticism of the SCP paradigm mentioned in the notes?",
    answers: [
      { text: "It overemphasizes firm-level factors", correct: false },
      { text: "It underemphasizes the role of industry structure in firms' profits", correct: false },
      { text: "It assumes a dynamic perspective", correct: false },
      { text: "It assumes a static perspective and neglects firm-level factors", correct: true },
    ],
  },
  {
    question: "What is a limitation of the SCP paradigm in industry analysis?",
    answers: [
      { text: "It neglects industry structure", correct: false },
      { text: "It overemphasizes firm-level factors", correct: false },
      { text: "It assumes industry structure is always changing", correct: false },
      { text: "It assumes a static perspective and neglects firm-level factors", correct: true },
    ],
  },
  {
    question: "What does the note suggest about the limitations of industry analysis?",
    answers: [
      { text: "They are irrelevant in dynamic industries", correct: false },
      { text: "They are essential for understanding dynamic industries", correct: false },
      { text: "They are inherent in industry analysis", correct: false },
      { text: "They should be acknowledged, and other factors like firm-level factors considered", correct: true },
    ],
  },
    {
    question: "What is the primary focus of the SCP paradigm in industry analysis?",
    answers: [
      { text: "Firm conduct within the industry", correct: false },
      { text: "Industry structure and its impact on firm conduct and performance", correct: true },
      { text: "Market segmentation criteria", correct: false },
      { text: "Determining the level of competition", correct: false },
    ],
  },
  {
    question: "What is the main purpose of industry analysis, as mentioned in the notes?",
    answers: [
      { text: "To maximize shareholder interests", correct: false },
      { text: "To evaluate firm-level factors", correct: false },
      { text: "To assess industry attractiveness and understand industry structure", correct: true },
      { text: "To minimize stakeholder interests", correct: false },
    ],
  },
  {
    question: "What is a key assumption about industry structure in industry analysis?",
    answers: [
      { text: "It is continuously changing", correct: false },
      { text: "It is dynamic and unpredictable", correct: false },
      { text: "It is assumed to be fairly stable", correct: true },
      { text: "It has no impact on firm performance", correct: false },
    ],
  },
  {
    question: "What is the main objective of assessing industry attractiveness?",
    answers: [
      { text: "To maximize firm conduct", correct: false },
      { text: "To identify key success factors", correct: true },
      { text: "To minimize industry structure", correct: false },
      { text: "To forecast future profitability", correct: false },
    ],
  },
  {
    question: "What is the first step for industry analysis according to Porter's 5 Forces?",
    answers: [
      { text: "Identify key success factors", correct: false },
      { text: "Analyze industry rivalry", correct: false },
      { text: "Identify the industry and market", correct: true },
      { text: "Forecast future profitability", correct: false },
    ],
  },
  {
    question: "How is market defined in contrast to the industry?",
    answers: [
      { text: "Market is a subset of an industry", correct: false },
      { text: "Market is the same as an industry", correct: false },
      { text: "Market is the segmentation of an industry based on various criteria", correct: true },
      { text: "Market and industry are interchangeable terms", correct: false },
    ],
  },
  {
    question: "What is the primary principle used to define industries or markets?",
    answers: [
      { text: "Market concentration", correct: false },
      { text: "Barriers to entry", correct: false },
      { text: "Substitutability", correct: true },
      { text: "Industry rivalry", correct: false },
    ],
  },
  {
    question: "How is the intensity of rivalry measured in industry analysis?",
    answers: [
      { text: "Number of firms competing in a market", correct: false },
      { text: "Market share of the largest firms", correct: true },
      { text: "Diversity of competitors", correct: false },
      { text: "Product differentiation", correct: false },
    ],
  },
  {
    question: "What is the Herfindahl index used for in industry analysis?",
    answers: [
      { text: "Measuring market concentration", correct: true },
      { text: "Forecasting future profitability", correct: false },
      { text: "Assessing industry attractiveness", correct: false },
      { text: "Identifying key success factors", correct: false },
    ],
  },
  {
    question: "What determines the strength of entry barriers in industry analysis?",
    answers: [
      { text: "Market share of the largest firms", correct: false },
      { text: "Diversity of competitors", correct: false },
      { text: "Number of firms in the market", correct: false },
      { text: "Capital requirements, economies of scale, and legal barriers", correct: true },
    ],
  },
  {
    question: "What is analogous to buyer power in industry analysis?",
    answers: [
      { text: "Barriers to entry", correct: false },
      { text: "Herfindahl index", correct: false },
      { text: "Threat of entry", correct: false },
      { text: "Supplier power", correct: true },
    ],
  },
  {
    question: "What is a determinant of buyer power in industry analysis?",
    answers: [
      { text: "Barriers to entry", correct: false },
      { text: "Market concentration", correct: false },
      { text: "Bargaining power and size of buyers", correct: true },
      { text: "Threat of entry", correct: false },
    ],
  },
  {
    question: "What does the threat of substitution in industry analysis refer to?",
    answers: [
      { text: "Buyers' propensity to switch suppliers", correct: false },
      { text: "Buyers' propensity to substitute a firm's product with other products", correct: true },
      { text: "The entry of new firms", correct: false },
      { text: "The exit of existing firms", correct: false },
    ],
  },
  {
    question: "What does supplier power refer to in industry analysis?",
    answers: [
      { text: "Bargaining power of buyers", correct: false },
      { text: "Bargaining power of suppliers", correct: true },
      { text: "Intensity of industry rivalry", correct: false },
      { text: "Threat of entry", correct: false },
    ],
  },
  {
    question: "What is a limitation of industry analysis mentioned in the notes?",
    answers: [
      { text: "It provides a dynamic perspective", correct: false },
      { text: "It includes interaction among competitors", correct: false },
      { text: "It has a reverse causality", correct: false },
      { text: "It assumes a static perspective and neglects interaction among competitors", correct: true },
    ],
  },
  {
    question: "What is a potential issue with defining industry boundaries in industry analysis?",
    answers: [
      { text: "Industry boundaries are always well-defined", correct: false },
      { text: "Industry boundaries depend on firm-level factors", correct: false },
      { text: "Industry boundaries are static", correct: false },
      { text: "Industry boundaries vary depending on objectives", correct: true },
    ],
  },
  {
    question: "What does the SCP paradigm primarily assume about firms' profits?",
    answers: [
      { text: "Firms' profits depend on firm-level factors", correct: true },
      { text: "Firms' profits are solely determined by industry structure", correct: false },
      { text: "Firms' profits are not influenced by industry structure", correct: false },
      { text: "Firms' profits are static and unchanging", correct: false },
    ],
  },
  {
    question: "What is a criticism of the SCP paradigm mentioned in the notes?",
    answers: [
      { text: "It overemphasizes firm-level factors", correct: false },
      { text: "It underemphasizes the role of industry structure in firms' profits", correct: false },
      { text: "It assumes a dynamic perspective", correct: false },
      { text: "It assumes a static perspective and neglects firm-level factors", correct: true },
    ],
  },
  {
    question: "What is a limitation of the SCP paradigm in industry analysis?",
    answers: [
      { text: "It neglects industry structure", correct: false },
      { text: "It overemphasizes firm-level factors", correct: false },
      { text: "It assumes industry structure is always changing", correct: false },
      { text: "It assumes a static perspective and neglects firm-level factors", correct: true },
    ],
  },
  {
    question: "What does the note suggest about the limitations of industry analysis?",
    answers: [
      { text: "They are irrelevant in dynamic industries", correct: false },
      { text: "They are essential for understanding dynamic industries", correct: false },
      { text: "They are inherent in industry analysis", correct: false },
      { text: "They should be acknowledged, and other factors like firm-level factors considered", correct: true },
    ],
  },
     {
    question: "What is the primary purpose of segmentation, as mentioned in the notes?",
    answers: [
      { text: "To disaggregate industries into specific markets", correct: true },
      { text: "To analyze competition at an industry level", correct: false },
      { text: "To identify key success factors", correct: false },
      { text: "To focus on Blue Ocean Strategy", correct: false },
    ],
  },
  {
    question: "Why is segmentation useful?",
    answers: [
      { text: "To adapt the same strategy for all segments", correct: false },
      { text: "To identify uncontested market segments", correct: true },
      { text: "To ignore potential growth segments", correct: false },
      { text: "To complicate the decision-making process", correct: false },
    ],
  },
  {
    question: "What is a potential advantage of identifying potential 'uncontested' market segments?",
    answers: [
      { text: "Blue Ocean Strategy", correct: true },
      { text: "First mover advantage", correct: false },
      { text: "Market saturation", correct: false },
      { text: "Competitive convergence", correct: false },
    ],
  },
  {
    question: "In segmentation analysis, what is the first step?",
    answers: [
      { text: "Analyze segments' attractiveness", correct: false },
      { text: "Construct a segmentation matrix", correct: false },
      { text: "Identify key segmentation variables", correct: true },
      { text: "Decide how many segments to serve", correct: false },
    ],
  },
  {
    question: "What is the purpose of constructing a segmentation matrix in segmentation analysis?",
    answers: [
      { text: "To confuse competitors", correct: false },
      { text: "To identify key success factors", correct: false },
      { text: "To analyze benefits of broad vs. narrow scope", correct: false },
      { text: "To visualize segments using 2-3 dimensions", correct: true },
    ],
  },
  {
    question: "What is a key consideration when selecting key segmentation variables?",
    answers: [
      { text: "Variables should be as complex as possible", correct: false },
      { text: "Variables should not distinguish markets in terms of demand-side substitutability", correct: false },
      { text: "Variables should identify distinct markets in terms of demand-side and supplier-side substitutability", correct: true },
      { text: "Variables should be determined by competitor behavior", correct: false },
    ],
  },
  {
    question: "How does segmentation analysis differ from industry analysis?",
    answers: [
      { text: "Segmentation focuses on Blue Ocean Strategy, while industry analysis does not", correct: false },
      { text: "Industry analysis is broader and encompasses segmentation", correct: true },
      { text: "Industry analysis ignores competition at the industry level", correct: false },
      { text: "Segmentation and industry analysis are synonymous terms", correct: false },
    ],
  },
  {
    question: "What does KSF stand for in segmentation analysis?",
    answers: [
      { text: "Key Segmentation Factors", correct: false },
      { text: "Key Success Factors", correct: true },
      { text: "Key Strategic Factors", correct: false },
      { text: "Key Scope Factors", correct: false },
    ],
  },
  {
    question: "What is the primary factor that influences the decision between broad and focused strategies?",
    answers: [
      { text: "Number of segments identified", correct: false },
      { text: "Presence of shared costs across segments", correct: true },
      { text: "Uncontested market segments", correct: false },
      { text: "Market saturation", correct: false },
    ],
  },
  {
    question: "What is the primary focus of a broad strategy in segmentation analysis?",
    answers: [
      { text: "Focus on customer group and geographic area", correct: false },
      { text: "Focus on product characteristics", correct: false },
      { text: "Serve all or many customer groups in the industry with a portfolio of related products", correct: true },
      { text: "Competitive differentiation", correct: false },
    ],
  },
  {
    question: "What does a focused strategy in segmentation analysis primarily emphasize?",
    answers: [
      { text: "Broad product offerings", correct: false },
      { text: "Serving all customer groups", correct: false },
      { text: "Competing across multiple industries", correct: false },
      { text: "Focus on customer group, product, or geographic area", correct: true },
    ],
  },
  {
    question: "How is segmentation different from positioning in the context of the notes?",
    answers: [
      { text: "Positioning focuses on customer and geographic areas, while segmentation does not", correct: false },
      { text: "Differentiation is a synonym for segmentation", correct: false },
      { text: "Positioning focuses on a favorable position in an industry or market, while segmentation is the choice of customers and areas targeted by a firm", correct: true },
      { text: "Segmentation and positioning are interchangeable terms", correct: false },
    ],
  },
  {
    question: "What is the key choice in differentiation according to the notes?",
    answers: [
      { text: "Choice of customers", correct: false },
      { text: "Choice of a favorable position", correct: false },
      { text: "Choice of distinguishing offerings from competitors", correct: true },
      { text: "Choice of geographic areas", correct: false },
    ],
  },
  {
    question: "Does differentiation necessarily imply segmentation?",
    answers: [
      { text: "Yes, always", correct: false },
      { text: "No, never", correct: false },
      { text: "Depends upon the differentiation strategy", correct: true },
      { text: "Differentiation and segmentation are the same", correct: false },
    ],
  },
  {
    question: "What is broad scope differentiation primarily about?",
    answers: [
      { text: "Appealing to what distinguishes different customer groups", correct: false },
      { text: "Appealing to what is common between different customers", correct: true },
      { text: "Appealing to a narrow market segment", correct: false },
      { text: "Competing in multiple industries simultaneously", correct: false },
    ],
  },
  {
    question: "What is focused differentiation primarily about?",
    answers: [
      { text: "Appealing to what is common between different customers", correct: false },
      { text: "Appealing to a narrow market segment", correct: true },
      { text: "Competing in multiple industries simultaneously", correct: false },
      { text: "Appealing to a broad customer base", correct: false },
    ],
  },
  {
    question: "What is a limitation of segmentation mentioned in the notes?",
    answers: [
      { text: "Segmentation is not useful for identifying uncontested market segments", correct: false },
      { text: "Segmentation is limited to product characteristics", correct: false },
      { text: "Segmentation is static and unchanging", correct: false },
      { text: "Segmentation assumes a static industry structure", correct: true },
    ],
  },
  {
    question: "What is a limitation of differentiation in segmentation analysis?",
    answers: [
      { text: "Differentiation is always beneficial", correct: false },
      { text: "Differentiation assumes a dynamic industry structure", correct: false },
      { text: "Differentiation does not account for competitive structure", correct: false },
      { text: "Differentiation does not guarantee segmentation", correct: true },
    ],
  },
  {
    question: "What does the note suggest about segmentation and industry analysis limitations?",
    answers: [
      { text: "They are irrelevant in static industries", correct: false },
      { text: "They are inherent in segmentation and industry analysis", correct: true },
      { text: "They are essential for understanding dynamic industries", correct: false },
      { text: "They should be ignored for strategic decision-making", correct: false },
    ],
  },
  {
    question: "What is the dynamic dimension of strategy concerned with?",
    answers: [
      { text: "Where to compete", correct: false },
      { text: "How to compete", correct: false },
      { text: "What to achieve", correct: true },
      { text: "When to compete", correct: false },
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const maxQuestions = 10;  // Update the number of questions

// Function to shuffle questions randomly
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    // Shuffle all questions before displaying them
    shuffleQuestions(questions);

    // Take the first maxQuestions questions for the quiz
    const selectedQuestions = questions.slice(0, maxQuestions);

    // Shuffle the selected questions
    shuffleQuestions(selectedQuestions);

    // Show the first question
    showQuestion();
}

// Function to reset the state
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to show a question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Function to select an answer
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Function to show the final score
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${maxQuestions}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Function to handle the "Next" button
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < maxQuestions) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < maxQuestions) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Start the quiz when the page loads
startQuiz();
