<h1 align="center">SDN Hybrid AAA Security Platform</h1>
<p align="center">RADIUS NAC + Kerberos Step-Up + Policy Enforcement + Dashboard Observability</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-1f6feb?style=flat-square" alt="Python 3.10+">
  <img src="https://img.shields.io/badge/Controller-OS--Ken-0b5cad?style=flat-square" alt="Controller">
  <img src="https://img.shields.io/badge/AAA-RADIUS%20%2B%20Kerberos-0e8a16?style=flat-square" alt="AAA">
  <img src="https://img.shields.io/badge/Emulation-MiniNet-2563eb?style=flat-square" alt="MiniNet">
  <img src="https://img.shields.io/badge/Dashboard-Operational%20Evidence-6f42c1?style=flat-square" alt="Dashboard">
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#architecture-evidence">Architecture</a> •
  <a href="#workflow">Workflow</a> •
  <a href="#dashboard-evidence">Dashboard Evidence</a> •
  <a href="#run">Run</a>
</p>

---

## Overview
This repository presents a portfolio-ready SDN security implementation built around hybrid AAA enforcement:
- identity-driven admission with RADIUS.
- policy gating at controller level.
- Kerberos step-up for high-risk or privileged transitions.
- observable operational state through dashboard pages and event trails.

## Architecture Evidence
<table>
  <tr>
    <td width="50%">
      <img src="docs/assets/architecture/high-level-architecture.png" alt="High Level System Architecture">
    </td>
    <td width="50%">
      <img src="docs/assets/architecture/layered-security-map.png" alt="Layered Security Map and Code Mapping">
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <img src="docs/assets/architecture/pam-controller-authorization-flow.png" alt="PAM to Controller Authorization Flow">
    </td>
  </tr>
</table>

## Workflow
```mermaid
flowchart LR
    A[Client Join] --> B[Switch + SDN Controller]
    B --> C[RADIUS Authentication]
    C --> D{Policy Evaluation}
    D -->|Compliant| E[Baseline Access]
    D -->|High Risk| F[Kerberos Step-Up]
    F --> G{Step-Up Success}
    G -->|Yes| H[Quarantine Release]
    G -->|No| I[Restricted Access]
    H --> J[Full Authorized Access]
    E --> J
```

## Dashboard Evidence
<table>
  <tr>
    <td width="50%">
      <img src="docs/assets/screenshots/dashboard-events-access-accept.png" alt="Dashboard Event Stream Access Accept">
    </td>
    <td width="50%">
      <img src="docs/assets/screenshots/dashboard-sessions-view.png" alt="Dashboard Sessions View">
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="docs/assets/screenshots/dashboard-session-expiry.png" alt="Dashboard Session Expiry Verification">
    </td>
    <td width="50%">
      <img src="docs/assets/screenshots/dashboard-proof-status.png" alt="Dashboard Proof Status">
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <img src="docs/assets/screenshots/dashboard-hybrid-posture.png" alt="Dashboard Hybrid Posture Confirmed">
    </td>
  </tr>
</table>

## Run
```bash
pip install -r requirements.txt
cp configs/env/lab.env.example configs/env/lab.env
make run-lab
```

