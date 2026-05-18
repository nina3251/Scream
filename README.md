# 🔪 SCREAM FRANCHISE SOCIAL NETWORK

![Ghostface Network Header](./src/assets/images/ghostface_network_banner_1779108327998.png)

## 📁 Project Overview
An interactive, forensic-style visualization of the complex social and family relationships spanning the entire **Scream** franchise (Movies 1-7). This application maps the bloodlines, romantic entanglements, and deadly encounters that define the Woodsboro legacy.

## ✨ Features
- **Interactive Force-Directed Graph**: Built with **D3.js**, allowing users to explore characters as nodes and their connections as weighted edges.
- **AI Ghostface Analysis**: Powered by **Google Gemini API**, providing dynamic psychological insights and trivia for every selected character.
- **Franchise Filtering**: Filter the network by specific movie years (from '96 to '26) to see how the connection web evolves.
- **Forensic Sidebar**: A detailed "Subject Information" panel with forensic data, threat levels, and appearance logs.
- **Themed UI**: A "Bold Typography" aesthetic inspired by the *Ghostface_OS* interface, featuring high-contrast visuals and cinematic animations.

## 🛠️ Tech Stack
- **Frontend**: React 19 + TypeScript
- **Visualization**: D3.js
- **Styling**: Tailwind CSS + Motion (framer-motion)
- **AI Integration**: Google Generative AI (Gemini SDK)
- **Scientific Documentation**: Formal report available in `/report/report_1.md`

## 🚀 Getting Started

### Environment Variables
To enable the "Ghostface Analysis" features, you need to provide a Gemini API key:
```env
GEMINI_API_KEY=your_api_key_here
```

### Installation
1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`

## 📖 Scientific Report
For a deep dive into the socio-narrative visualization methodology used in this project, please refer to our [Scientific Analysis Report](./report/report_1.md).

---
*© 1996-2026 WOODSBORO FORENSICS DIVISION. ALL SECRETS LEAD TO WOODSBORO.*
