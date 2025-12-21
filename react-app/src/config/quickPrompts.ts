// Quick Prompts Configuration
// =============================
// Easy to modify, add, edit, and reorder prompts
// Each prompt has:
// - id: unique identifier
// - displayText: short text shown on the button
// - description: tooltip description
// - actualPrompt: detailed prompt sent to the AI agent

export interface QuickPrompt {
  id: string;
  displayText: string;
  description: string;
  actualPrompt: string;
}

export const quickPrompts: QuickPrompt[] = [
  {
    id: "spr_multi_index",
    displayText: "Run Security Performance Report Sample",
    description: "Security Performance Report for multiple global indices",
    actualPrompt: `Run Security Performance Report (SPR) for Nifty 50 symbol ^NSEI, Larsen & Toubro (LT.NS) and Nifty Midcap 100 symbol NIFTY_MIDCAP_100.NS. Past 18 years. Risk free rate 5%. Go ahead and run - no need to confirm parameters`
  },
  {
    id: "hdfc_analysis",
    displayText: "Analyze HDFC Bank",
    description: "Comprehensive HDFC Bank stock analysis",
    actualPrompt: `Run these reports for  HDFC Bank Limited (HDFCBANK.NS) as per details below. Go ahead and run - no need to confirm parameters

Please provide:
1. Security Performance Report - For HDFC Bank Limited (HDFCBANK.NS), Kotak Mahindra Bank (KOTAKBANK.NS), ICICIBANK.NS & Nifty Fifty (^NSEI) for past 10 years. Risk free rate 5%. 
2. Technical Analysis - For HDFC Bank Limited (HDFCBANK.NS). Weekly for past 3 years. Daily Past 1 year.
3. QuantStats - For HDFC Bank Limited (HDFCBANK.NS) & Nifty Fifty (^NSEI) for past 10 years. Risk free rate 5%. 
`
  },
  
  {
    id: "quantstats_nifty_sp500",
    displayText: "Run QuantStats Sample",
    description: "Compare Nifty 50 and S&P 500 performance using QuantStats",
    actualPrompt: `Run QuantStats for Nifty 50 symbol ^NSEI and S&P 500 symbol ^GSPC for past 10 years. Risk free rate 5%. Go ahead and run - no need to confirm parameters`
  }, 
  {
    id: "google_technicals",
    displayText: "Run Sample AI Technical Analysis",
    description: "Technical analysis for Google/Alphabet stock",
    actualPrompt: ` Technical Analysis - For Google (GOOG). Weekly for past 3 years. Daily Past 1 year. Go ahead and run - no need to confirm parameters`
  },
  {
    id: "capabilities_overview",
    displayText: "What all can you do?",
    description: "Learn about AI agent capabilities",
    actualPrompt: `What all can you do with brief explanation of capabilities.`
  },
  {
    id: "goog_pnl_table",
    displayText: "Pull Sample Financials",
    description: "Google P&L analysis in tabular format",
    actualPrompt: `Extract and analyze Alphabet Inc. (GOOGL) Profit & Loss statement data and present key items in a  table format.`
  }
];

// Instructions for adding new prompts:
// ====================================
// 1. Add a new object to the quickPrompts array above
// 2. Give it a unique id (no spaces, use underscores)
// 3. Set displayText to what you want shown on the button
// 4. Set description for the tooltip
// 5. Set actualPrompt to the detailed prompt for the AI
// 6. Save the file - changes will be reflected immediately

// Example of adding a new prompt:
// {
//   id: "new_analysis",
//   displayText: "Short Button Text",
//   description: "Tooltip description of what this does",
//   actualPrompt: `Your detailed multi-line prompt here.
//   
//   Include:
//   1. Specific instructions
//   2. What data to analyze
//   3. Expected output format
//   4. Any special requirements`
// } 