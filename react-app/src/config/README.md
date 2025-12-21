# Quick Prompts Configuration Guide

## 📁 File Location
`react-app/src/config/quickPrompts.ts`

## 🚀 Quick Start

### Adding a New Prompt
1. Open `quickPrompts.ts`
2. Add a new object to the `quickPrompts` array
3. Follow this structure:

```typescript
{
  id: "unique_identifier",
  displayText: "Short Button Text",
  description: "Tooltip description",
  actualPrompt: `Your detailed prompt here...`
}
```

### Example: Adding a Tesla Analysis Prompt
```typescript
{
  id: "tesla_analysis",
  displayText: "Tesla Deep Dive",
  description: "Comprehensive Tesla stock analysis with technical and fundamental metrics",
  actualPrompt: `Perform a comprehensive analysis of Tesla Inc. (TSLA).

Please provide:
1. Current stock price, market cap, and key financial ratios
2. Technical analysis with key support/resistance levels
3. Fundamental analysis including:
   - Revenue growth and profitability trends
   - EV market position and competition
   - Production and delivery metrics
   - Regulatory and market risks
4. Recent quarterly earnings analysis
5. Future outlook and price targets

Use all available MCP servers for comprehensive data analysis.`
}
```

## 🎯 Structure Explained

### Required Fields
- **`id`**: Unique identifier (no spaces, use underscores)
- **`displayText`**: Text shown on the button (keep short, ~2-6 words)
- **`description`**: Tooltip text when hovering over button
- **`actualPrompt`**: Detailed prompt sent to the AI agent

### Best Practices

#### Display Text
- ✅ "QuantStats: Nifty vs S&P"
- ✅ "HDFC Bank Analysis"
- ✅ "Tech Stocks P&L"
- ❌ "Please analyze HDFC Bank with detailed fundamental and technical analysis including all financial ratios"

#### Actual Prompt
- Be specific and detailed
- Include numbered lists for clarity
- Mention which MCP servers to use
- Specify output format (tables, charts, etc.)
- Include timeframes and specific metrics

## 📋 Current Prompts

| Display Text | Purpose | MCP Servers Used |
|--------------|---------|------------------|
| QuantStats: Nifty 50 vs S&P 500 | Compare index performance | QuantStats |
| SPR: Nifty 50, S&P500, FTSE100 | Multi-index performance report | Security Performance Report |
| Analyze HDFC Bank | Comprehensive stock analysis | Multiple servers |
| Technicals - Google | Technical analysis | Technical Analysis |
| What all can you do? | Capability overview | All servers |
| P&L - GOOG - key items as table | Financial statement analysis | Yahoo Finance |

## 🔧 Management Tasks

### Reordering Prompts
Change the order in the array - first item shows first on mobile, all show on desktop.

### Editing Existing Prompts
1. Find the prompt by its `id`
2. Modify any field (displayText, description, actualPrompt)
3. Save the file

### Removing Prompts
Delete the entire prompt object from the array.

### Testing Changes
1. Save the file
2. Refresh your browser
3. Changes appear immediately

## 💡 Tips for Writing Effective Prompts

### Structure Your Prompts
```typescript
actualPrompt: `[Brief description of what you want]

Please provide:
1. [Specific requirement 1]
2. [Specific requirement 2]
3. [Specific requirement 3]

Include:
- [Additional detail 1]
- [Additional detail 2]

Use [specific MCP server names] for [specific functions].`
```

### Common MCP Servers
- **QuantStats MCP Server**: Portfolio performance metrics
- **Technical Analysis MCP Server**: Charts and technical indicators
- **Security Performance Report MCP Server**: Comprehensive stock reports
- **Yahoo Finance MCP Server**: Real-time financial data
- **ReportLab FastAPI Server**: PDF report generation

### Prompt Categories
1. **Quick Analysis**: Simple, fast responses
2. **Deep Dive**: Comprehensive multi-server analysis
3. **Specific Format**: Tables, charts, specific layouts
4. **Comparative**: Multiple assets or timeframes

## 🔄 Hot Reloading
Changes to `quickPrompts.ts` are reflected immediately in the app - no restart needed!

## 📝 Notes
- Maximum ~6 prompts show well on mobile
- Desktop shows all prompts
- Keep displayText concise for mobile UI
- Use clear, actionable actualPrompts for best AI responses 