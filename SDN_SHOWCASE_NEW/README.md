<p align="center">
  <img src="docs/assets/visuals/hero-banner.png" alt="SDN Hybrid AAA Security Platform Banner" width="100%">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-1f6feb?style=for-the-badge" alt="Python 3.10+">
  <img src="https://img.shields.io/badge/Controller-OS--Ken-0b5cad?style=for-the-badge" alt="Controller OS-Ken">
  <img src="https://img.shields.io/badge/AAA-RADIUS%20%2B%20Kerberos-0e8a16?style=for-the-badge" alt="AAA stack">
  <img src="https://img.shields.io/badge/Emulation-MiniNet-2563eb?style=for-the-badge" alt="MiniNet">
  <img src="https://img.shields.io/badge/Observability-Dashboard-6f42c1?style=for-the-badge" alt="Dashboard">
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#highlights">Highlights</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#workflow">Workflow</a> •
  <a href="#results-evidence">Results Evidence</a> •
  <a href="#run--usage">Run / Usage</a> •
  <a href="#access">Access</a>
</p>

---

## Overview
This project implements a campus-scale SDN security platform that combines:
- Layer-2 admission control.
- RADIUS-based identity verification.
- Kerberos step-up authentication for high-risk sessions.
- Policy-driven quarantine and release logic.
- Dashboard-backed observability for operators.

## Highlights
- Multi-phase access flow from onboarding to full-trust access.
- Policy enforcement integrated with controller decisions.
- Service-state visibility for controller, RADIUS, and identity components.
- Evidence-oriented workflow with execution logs and dashboard pages.

## Architecture
<p align="center">
  <img src="docs/assets/architecture/system-architecture.png" alt="System Architecture" width="92%">
</p>

## Workflow
```mermaid
flowchart LR
    A[Client Admission] --> B[Switch + Controller]
    B --> C[RADIUS Authentication]
    C --> D{Policy Check}
    D -->|Compliant| E[Baseline Access]
    D -->|High Risk| F[Kerberos Step-Up]
    F --> G{Step-Up Success}
    G -->|Yes| H[Quarantine Release]
    G -->|No| I[Restricted Segment]
    H --> J[Full Access]
    E --> J
```

```mermaid
flowchart LR
    A[Controller Events] --> B[Backend API]
    B --> C[Overview Page]
    B --> D[Events Page]
    B --> E[Network Page]
    B --> F[Services Status Page]
```

## Results Evidence
<table>
  <tr>
    <td><img src="docs/assets/screenshots/dashboard-overview.svg" alt="Dashboard Overview"></td>
    <td><img src="docs/assets/screenshots/dashboard-events.svg" alt="Events View"></td>
  </tr>
  <tr>
    <td><img src="docs/assets/screenshots/dashboard-network.svg" alt="Network View"></td>
    <td><img src="docs/assets/screenshots/dashboard-services.svg" alt="Services Status"></td>
  </tr>
</table>

## Run / Usage
```bash
# 1) Install dependencies
pip install -r requirements.txt

# 2) Prepare environment variables
cp configs/env/lab.env.example configs/env/lab.env

# 3) Start the official lab entrypoint
make run-lab

# 4) Open dashboard
# http://127.0.0.1:8050
```

## Access
- Core source code remains private.
- Public repository presents architecture, execution flow, and validated evidence.

