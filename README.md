# QuantStats & Technical Analysis Chat Interface

This project is a React-based chat interface for technical analysis and quantitative statistics, built with modern web technologies. It provides a clean, responsive chat experience that connects to n8n workflows for AI-powered financial analysis.

### Statcounter Note
The application includes a Statcounter web analytics code patch. This tracking code is linked to my personal account, so all analytics data will be sent there. Please replace it with your own Statcounter ID or other analytics tracking code, or remove it entirely if you don't need web analytics.

## AI Co-Analyst Platform

For additional data analysis capabilities, visit our AI Co-Analyst Platform at [rex.tigzig.com](https://rex.tigzig.com). For any questions, reach out to me at amar@harolikar.com

## Tech Stack

- React 18 with Vite
- TypeScript
- Tailwind CSS v3
- shadcn/ui components
- ReactMarkdown with syntax highlighting
- Roboto font family

## Architecture Overview

### Secure Chat Implementation
- Direct webhook communication to n8n workflows
- Environment variables protect webhook URLs and sensitive configurations
- Client-side React application with secure API integration

### Component Structure

#### Chat Interface
- Real-time chat interface with comprehensive markdown support
- Handles both text and structured data responses
- Supports system messages and loading states
- Mobile-first responsive design with adaptive layouts
- Tab-based interface (AI Research Analyst / Logs)

#### Markdown Rendering
- Full markdown support with syntax highlighting
- Table rendering with responsive design
- Code block detection and highlighting
- Link handling with external tab opening

## Environment Variables

Create a `.env` file in the `react-app` directory with the following configuration:

```bash
VITE_N8N_WEBHOOK_URL=your_n8n_webhook_url_here
```

Replace `your_n8n_webhook_url_here` with your actual n8n webhook URL.

## Backend Integration

### n8n Workflow Schema
The n8n workflow schema and configuration files are available in the `docs/` folder of this repository.

### MCP-FastAPI Servers Integration
The n8n workflow connects to multiple integrated MCP-FastAPI Servers :
- QuantStats MCP-FastAPI Server
- Technical Analysis MCP-FastAPI Server
- Security Performance Report MCP-FastAPI Server
- Yahoo Finance MCP-FastAPI Server
- ReportLab FastAPI Server

### Backend Setup Guide
For detailed information about setting up the complete backend infrastructure including n8n workflows and MCP servers, refer to the comprehensive build guide:

**Backend Integration Guide:** https://rex.tigzig.com/mcp-quantstats-agent

This guide covers:
- n8n workflow setup and configuration
- MCP server deployment and integration
- Webhook configuration
- Complete system architecture

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd PORTFOLIO_AGENT_REACT
```

2. Navigate to the React app directory:
```bash
cd react-app
```

3. Install dependencies:
```bash
npm install
```

4. Set up environment variables:
```bash
# Create .env file in react-app directory
echo "VITE_N8N_WEBHOOK_URL=your_webhook_url_here" > .env
```

5. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Real-time Chat**: Instant communication with AI research analyst
- **Markdown Support**: Rich text rendering with syntax highlighting
- **Logging System**: Comprehensive request/response logging with expandable details
- **Quick Prompts**: Pre-configured analysis shortcuts
- **Font Consistency**: Uniform 14px Roboto font across all devices

## License

MIT License - feel free to use this code for your own projects.

## Note

This interface is designed to be a secure, efficient bridge between users and backend AI processing systems. While the frontend is open-source, it requires proper backend configuration (n8n workflows and MCP servers) to function fully. Refer to the backend integration guide for complete setup instructions.


Text