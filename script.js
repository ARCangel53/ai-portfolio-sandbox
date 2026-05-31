// Configuration
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'mixtral-8x7b-32768';

// DOM Elements
const generateBtn = document.getElementById('generateBtn');
const userInput = document.getElementById('userInput');
const outputContent = document.getElementById('outputContent');
const statusText = document.getElementById('statusText');
const customKeyInput = document.getElementById('customKeyInput');
const agentMode = document.getElementById('agentMode');

// Status indicator dots
const redDot = document.querySelector('.dot.red');
const yellowDot = document.querySelector('.dot.yellow');
const greenDot = document.querySelector('.dot.green');

// Event Listeners
generateBt n.addEventListener('click', handleGenerate);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleGenerate();
});

// Main handler for AI generation
async function handleGenerate() {
  const prompt = userInput.value.trim();
  const apiKey = customKeyInput.value.trim();
  const mode = agentMode.value;

  // Validation
  if (!prompt) {
    outputContent.textContent = '❌ Error: Please enter a prompt.';
    return;
  }

  if (!apiKey) {
    outputContent.textContent = '❌ Error: Please enter your Groq API key in the security bar above.';
    return;
  }

  // Disable button and update UI
  generateBtn.disabled = true;
  userInput.disabled = true;
  updateStatus('Processing', 'yellow');
  outputContent.textContent = '⏳ Connecting to Groq AI engine...\n';

  try {
    // Prepare system message based on mode
    const systemMessage = getSystemMessage(mode);

    // Make API call to Groq
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages: [
          {
            role: 'system',
            content: systemMessage,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2048,
        stream: false,
      }),
    });

    // Handle API errors
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.error?.message || 'Unknown API error';
      throw new Error(`API Error (${response.status}): ${errorMessage}`);
    }

    // Parse response
    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || 'No response received';

    // Display response with formatting
    outputContent.innerHTML = `<strong>🤖 AI Response:</strong>\n\n${escapeHtml(aiResponse)}`;
    updateStatus('Complete', 'green');
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    outputContent.textContent = `❌ Error: ${error.message}\n\nMake sure your Groq API key is valid and you have API credits available.`;
    updateStatus('Error', 'red');
  } finally {
    // Re-enable button
    generateBtn.disabled = false;
    userInput.disabled = false;
  }
}

// Get system message based on agent mode
function getSystemMessage(mode) {
  if (mode === 'swarm') {
    return `You are a Finance Swarm Orchestrator - a sophisticated multi-agent AI system specializing in financial analysis. 
Your role is to analyze stock performance, market trends, and provide actionable portfolio insights.
Provide clear, data-driven analysis with specific metrics and recommendations.`;
  }
  return `You are a helpful AI assistant integrated into Ryan's portfolio sandbox. 
Provide clear, concise, and accurate responses to user queries.
When appropriate, format your response with structured data and actionable insights.`;
}

// Update status indicator
function updateStatus(text, color) {
  statusText.textContent = `Status: ${text}`;

  // Reset all dots
  redDot.style.opacity = '0.3';
  yellowDot.style.opacity = '0.3';
  greenDot.style.opacity = '0.3';

  // Light up appropriate dot
  if (color === 'red') {
    redDot.style.opacity = '1';
  } else if (color === 'yellow') {
    yellowDot.style.opacity = '1';
  } else if (color === 'green') {
    greenDot.style.opacity = '1';
  }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateStatus('Ready', 'green');
  outputContent.textContent = 'Waiting for your command...';
});