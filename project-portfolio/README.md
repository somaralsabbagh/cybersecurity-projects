<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/banner-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/banner-light.svg">
    <img src="docs/assets/banner-light.svg" alt="Portfolio Banner" width="100%">
  </picture>

  <h1>Security &amp; AI Engineering Portfolio</h1>
  <p>Private repositories with public technical summaries.</p>

  <p>
    <img src="https://img.shields.io/badge/Cybersecurity-Primary-1F883D" alt="Cybersecurity"/>
    <img src="https://img.shields.io/badge/AI%20Systems-Primary-2563EB" alt="AI"/>
    <img src="https://img.shields.io/badge/Projects-2-374151" alt="Projects"/>
  </p>
</div>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#highlights">Highlights</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#results">Results</a> •
  <a href="#usage">Usage</a> •
  <a href="#visual-evidence">Visual Evidence</a> •
  <a href="#access-and-collaboration">Access</a>
</p>

<img src="docs/assets/visuals/section-divider.svg" alt="Divider" width="100%"/>

## Overview

This repository is a public-facing technical overview of two private projects:
- Malware Image Classification (AI + Cybersecurity)
- SDN Hybrid AAA Security Platform (Network Security)

The purpose is to present architecture, workflow, and measurable outcomes in a reviewer-friendly format.

## Highlights

<table>
  <thead>
    <tr>
      <th>Area</th>
      <th>Summary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Architecture</strong></td>
      <td>Clear decomposition across data, control, policy, and evaluation layers</td>
    </tr>
    <tr>
      <td><strong>Engineering Quality</strong></td>
      <td>Reproducible workflows, release-safe structure, and consistent artifact organization</td>
    </tr>
    <tr>
      <td><strong>Security Scope</strong></td>
      <td>Hybrid AAA, policy enforcement, session/rate controls, and observability coverage</td>
    </tr>
  </tbody>
</table>

## Architecture

### Project Cards

<table>
  <thead>
    <tr>
      <th>Project</th>
      <th>Domain</th>
      <th>Core Contribution</th>
      <th>Repository</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Malware Image Classification</strong></td>
      <td>AI + Cybersecurity</td>
      <td>Binary-to-image pipeline with comparative deep-learning evaluation</td>
      <td><strong>Private</strong></td>
    </tr>
    <tr>
      <td><strong>SDN Hybrid AAA Security Platform</strong></td>
      <td>Network Security</td>
      <td>RADIUS + Kerberos hybrid AAA with policy enforcement and telemetry interfaces</td>
      <td><strong>Private</strong></td>
    </tr>
  </tbody>
</table>

### Visual Diagrams

<div align="center">
  <img src="docs/assets/diagrams/architecture-sdn.svg" alt="SDN Architecture Diagram" width="100%"/>
  <br><br>
  <img src="docs/assets/diagrams/workflow-malware.svg" alt="Malware Workflow Diagram" width="100%"/>
</div>

### Mermaid View

```mermaid
flowchart LR
  A[Client Host] --> B[SDN Controller]
  B --> C[RADIUS NAC]
  B --> D[Kerberos Verification]
  B --> E[Policy Engine]
  E --> F[Dashboard/API Telemetry]
```

<details>
  <summary><strong>Architecture Notes</strong></summary>

- SDN project applies layered controls: admission, identity proof, and runtime policy.
- Malware project separates ingestion, preprocessing, training, evaluation, and inference.
- Both projects were organized for maintainability and clear technical review.

</details>

<img src="docs/assets/visuals/section-divider.svg" alt="Divider" width="100%"/>

## Results

<div align="center">
  <img src="docs/assets/visuals/metrics-cards.svg" alt="Metrics Cards" width="100%"/>
</div>

<table>
  <thead>
    <tr>
      <th>Metric</th>
      <th align="right">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Featured Projects</td>
      <td align="right"><strong>2</strong></td>
    </tr>
    <tr>
      <td>Security Architectures Implemented</td>
      <td align="right"><strong>2</strong></td>
    </tr>
    <tr>
      <td>Core Engineering Tracks</td>
      <td align="right"><strong>5</strong></td>
    </tr>
    <tr>
      <td>Reproducible Workflows</td>
      <td align="right"><strong>2</strong></td>
    </tr>
  </tbody>
</table>

<details>
  <summary><strong>Project-Specific Result Notes</strong></summary>

**Malware Image Classification**
- Stable performance across selected architectures.
- Clear selection signal using comparative metrics.

**SDN Hybrid AAA**
- Verified baseline-to-hybrid progression.
- Operational evidence captured through metrics and event traces.

</details>

## Usage

This repository is documentation-first.

### Intended audience
- Recruiters and hiring managers
- Technical interviewers
- Security/ML reviewers

### Suggested reading path
1. Project Cards
2. Architecture diagrams
3. Results and metrics
4. Access request for deeper implementation review

## Visual Evidence

<div align="center">
  <img src="docs/assets/screenshots/dashboard-preview.png" alt="Dashboard Screenshot Placeholder" width="100%"/>
  <br><br>
  <img src="docs/assets/screenshots/malware-results.png" alt="Model Results Placeholder" width="100%"/>
</div>

> Replace placeholders with real PNG/WebP screenshots exported from private projects.

## Access and Collaboration

Source code is intentionally private.

For technical review, walkthrough, or controlled access requests:
- Live architecture walkthrough is available.
- Design rationale and implementation tradeoffs can be discussed in depth.
- Selected excerpts can be shared under appropriate constraints.

<p>
  <a href="mailto:your.email@example.com">
    <img src="https://img.shields.io/badge/Request%20Private%20Access-Contact-0A66C2?style=for-the-badge" alt="Request Access"/>
  </a>
  <a href="https://www.linkedin.com/">
    <img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn"/>
  </a>
</p>

## Scope

This public portfolio excludes:
- private source code
- credentials and secrets
- restricted infrastructure artifacts
