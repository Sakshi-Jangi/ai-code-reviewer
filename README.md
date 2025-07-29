# 🧠 AI Code Reviewer – Local VS Code Extension

**AI Code Reviewer** is a lightweight VS Code extension that uses Ollama’s on-device LLMs to review selected code and provide real-time suggestions. Designed for fast feedback, offline use, and better code quality.

---

## 💡 What It Does

- 🔍 Analyzes selected code blocks for improvements  
- 🤖 Uses local LLMs via Ollama — no internet needed  
- 🖱️ Triggered via right-click in VS Code  
- ⚡ Streams AI-generated suggestions instantly  
- 🎯 Built for developers, learners, and solo debugging

---

## 🛠 Built With

- **TypeScript** – Extension logic  
- **Ollama** – On-device AI for code review  
- **Axios** – Handles streaming feedback  
- **VS Code API** – Command registration & context menu

---

## ✅ Key Features

- One-click code review inside VS Code  
- Local-first: no cloud, no data leaks  
- Real-time suggestions streamed inline  
- Simple and focused UX  

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js installed  
- Ollama installed and running  
- Visual Studio Code  

### Steps

```bash
# Clone the repository
git clone https://github.com/Sakshi-Jangi/ai-code-reviewer.git

# Go to the project folder
cd ai-code-reviewer

# Install dependencies
npm install
Run in VS Code
Open the folder in VS Code

Press F5 to launch Extension Development Host

Right-click any code → AI Code Reviewer: Suggest Fixes

