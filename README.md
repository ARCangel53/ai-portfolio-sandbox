# Ryan's AI Portfolio Sandbox

**Exploring the frontier of human-AI collaboration.**

A live, interactive AI portfolio showcase featuring real-time Groq API integration. Run AI agents directly in your browser and experience advanced multi-agent orchestration.

## Features

✨ **Live AI Sandbox**
- Real-time streaming with Groq API
- Two agent modes: Standard Chat Assistant & Finance Swarm Orchestrator
- Beautiful dark-themed interface with status indicators

🎨 **Project Showcase**
- Prompt Studio (Coming Soon)
- Finance Agent Swarm (Live)
- Autonomous Web Crawler (Concept)

🔒 **Secure API Key Management**
- Optional custom Groq API key input
- Client-side processing (no server required)

## Getting Started

### Prerequisites
- A Groq API key (get one free at [console.groq.com](https://console.groq.com))
- A modern web browser

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ARCangel53/ai-portfolio-sandbox.git
   cd ai-portfolio-sandbox
   ```

2. **Open in browser:**
   - Open `index.html` in your web browser, or
   - Use a local server: `python -m http.server 8000`

3. **Add your API key:**
   - Enter your Groq API key in the security bar at the top
   - Select an agent mode (Standard or Finance Swarm)
   - Type a prompt and click "Run AI Agent"

## Usage Examples

**Standard Mode:**
- "Explain quantum computing in simple terms"
- "Write a Python function to sort an array"
- "What are the latest trends in AI?"

**Finance Swarm Mode:**
- "Analyze Apple (AAPL) stock performance"
- "Compare Tesla and Ford investment potential"
- "What sectors are trending in 2024?"

## File Structure

```
ai-portfolio-sandbox/
├── index.html       # Main HTML structure
├── style.css        # Styling and layout
├── script.js        # Groq API integration & interactivity
└── README.md        # This file
```

## API Configuration

The sandbox uses:
- **API Endpoint:** `https://api.groq.com/openai/v1/chat/completions`
- **Model:** `mixtral-8x7b-32768`
- **Temperature:** 0.7 (balanced creativity)
- **Max Tokens:** 2048

## Security Notes

- API keys are stored only in browser memory (not sent to any server)
- All API calls go directly to Groq's servers
- No data is logged or stored on external services
- Use a read-only or limited-quota API key for security

## Technologies

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **AI Engine:** Groq API (Mixtral 8x7B)
- **Architecture:** Client-side, no backend required

## Future Enhancements

- 🎨 Prompt Studio - Advanced prompt engineering tools
- 📊 Enhanced Finance Swarm with real market data
- 🕷️ Web Crawler integration for live data ingestion
- 💾 Conversation history & export
- 🎯 Custom agent templates

## License

MIT License - Feel free to use and modify!

## Get Your Groq API Key

1. Visit [console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Generate an API key
4. Paste it into the security bar and start experimenting!

---

**Made with ❤️ by Ryan | Exploring human-AI collaboration**