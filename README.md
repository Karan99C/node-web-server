# Voice Agentic AI Assistant

A modular, lightweight, production-ready Voice AI Assistant pipeline engineered for Python 3.14 compatibility. The core philosophy of this project is high cross-platform portability and structural reliability. It completely decouples its engine logic from heavy, failure-prone, platform-specific binaries like `PyAudio` or window-rendering graphics loops like `Pygame`.

Instead, it utilizes high-precision numeric collection over RAM buffers using `sounddevice` and `numpy` for an optimized, low-latency, and crash-resilient speech pipeline.

---

## 🏗️ System Architecture & Code Design

The workspace is split into distinct, single-responsibility files that separate core data collection, algorithmic logic, analytical computation, and vendor models.

### 📁 Project Structure Overview

```text
├── voice_agent.py        # Application Orchestrator, Audio Capture Pipeline & Core Gateway
├── gemini_backend.py     # Enterprise Cloud Generation Adapter
├── analytics_report.py   # Analytical Computation, Data Aggregator, and Excel Stylist
├── demo_run.py          # Scripted Automated Simulation Testbed
└── data/                 
    ├── conversations.csv # Raw Transaction Log (Append-Only Event Stream)
    ├── analytics.csv     # Daily Operational Metrics
    └── report.xlsx      
