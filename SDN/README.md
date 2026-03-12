<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/visuals/banner-sdn-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/visuals/banner-sdn-light.svg">
    <img src="docs/assets/visuals/banner-sdn-light.svg" alt="SDN Visual Banner" width="100%">
  </picture>

  <p>
    <img src="https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white" alt="Python"/>
    <img src="https://img.shields.io/badge/Controller-OS--Ken-0A66C2" alt="Controller"/>
    <img src="https://img.shields.io/badge/AAA-RADIUS%20%2B%20Kerberos-1F883D" alt="Hybrid AAA"/>
    <img src="https://img.shields.io/badge/Emulation-Mininet-2563EB" alt="Mininet"/>
    <img src="https://img.shields.io/badge/Observability-Dashboard-7B61FF" alt="Dashboard"/>
  </p>
</div>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#highlights">Highlights</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#workflow">Workflow</a> •
  <a href="#results-evidence">Results</a> •
  <a href="#usage">Usage</a> •
  <a href="#access">Access</a>
</p>

<img src="docs/assets/visuals/divider.svg" alt="Section Divider" width="100%"/>

## Overview

This project implements a layered SDN security model for campus-style networks:
- RADIUS NAC for device admission
- Kerberos step-up for sensitive-service access
- Controller-side policy enforcement for runtime decisions
- Dashboard/API observability for operational validation

## Highlights

<table>
  <thead>
    <tr>
      <th>Dimension</th>
      <th>Implemented Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Identity & Access</strong></td>
      <td>RADIUS MAC admission + Kerberos proof + PAM-gated authorization</td>
    </tr>
    <tr>
      <td><strong>Security Controls</strong></td>
      <td>Rate limiting, session TTL, emergency lockdown, DHCP snooping, ARP inspection</td>
    </tr>
    <tr>
      <td><strong>Operational Discipline</strong></td>
      <td>Phased validation, health checks, service checks, structured release hygiene</td>
    </tr>
  </tbody>
</table>

## Architecture

<div align="center">
  <img src="docs/assets/architecture/system-architecture.png" alt="System Architecture" width="100%"/>
</div>

<details>
  <summary><strong>Implementation Footprint</strong></summary>

- `src/controller/aaa_controller.py` for integrated AAA and policy orchestration.
- Modular components for portal auth, Kerberos authorization, rate/session control, and L2 protections.
- Dashboard pages and API layer for runtime visibility.

</details>

## Workflow

### Hybrid AAA Control Flow

```mermaid
flowchart LR
  A[Client Device] --> B[RADIUS MAC Admission]
  B -->|Accepted| C[Controller Policy Gate]
  B -->|Rejected| X[Drop / Deny]
  C --> D[Quarantine for Sensitive Services]
  D --> E[Kerberos Step-Up Authentication]
  E -->|Proof Valid| F[Quarantine Release]
  F --> G[Full Policy-Allowed Access]
```

### Observability Flow

```mermaid
flowchart LR
  A[Controller Events] --> B[Dashboard API]
  B --> C[Overview Page]
  B --> D[Events Page]
  B --> E[Network Page]
  B --> F[Services Status]
```

## Results Evidence

Primary artifacts:
- `data/results/latest/controller_metrics.json`
- `data/results/latest/controller.log`
- `data/results/latest/freeradius.log`
- `data/results/latest/kerberos_bootstrap.log`

### Chapter 4 UI Evidence

<div align="center">
  <img src="docs/assets/screenshots/dashboard-overview.png" alt="Dashboard Overview" width="100%"/>
  <br><br>
  <img src="docs/assets/screenshots/dashboard-events.png" alt="Dashboard Events" width="100%"/>
  <br><br>
  <img src="docs/assets/screenshots/dashboard-network.png" alt="Dashboard Network" width="100%"/>
  <br><br>
  <img src="docs/assets/screenshots/dashboard-services.png" alt="Dashboard Services Status" width="100%"/>
</div>

## Usage

```bash
make setup
make run-lab
make health
make status
make test
```

## Access

Source code is private by design.

For technical review:
- architecture walkthrough
- implementation deep dive
- controlled excerpt sharing

<p>
  <a href="mailto:your.email@example.com">
    <img src="https://img.shields.io/badge/Request%20Access-Contact-0A66C2?style=for-the-badge" alt="Request Access"/>
  </a>
</p>


