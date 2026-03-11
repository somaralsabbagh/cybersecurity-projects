<div align="center">

# Security & AI Engineering Portfolio

**A curated technical showcase of production-style project design, experimentation, and security-focused system implementation.**

![Repositories](https://img.shields.io/badge/Codebase-Private-0A66C2)
![Focus](https://img.shields.io/badge/Domain-Cybersecurity%20%26%20AI-1F883D)
![Portfolio](https://img.shields.io/badge/Portfolio-Technical%20Showcase-24292F)

</div>

## Overview
This repository presents selected projects with strong technical depth, reproducible methodology, and evidence-oriented outcomes.

- Primary domains: **AI Security**, **Network Security**, **Access Control**.
- Style: **research-informed engineering** with structured pipelines and measurable outputs.
- Source code: maintained in **private repositories** by design.

## Portfolio Index
1. [Project Cards](#project-cards)
2. [Malware Image Classification](#malware-image-classification)
3. [SDN Hybrid AAA Security Platform](#sdn-hybrid-aaa-security-platform)
4. [Technical Strengths](#technical-strengths)
5. [Access and Collaboration](#access-and-collaboration)

## Project Cards
| Project | Domain | Technical Core | Delivery Style | Repository |
|---|---|---|---|---|
| **Malware Image Classification** | AI + Cybersecurity | Binary-to-image pipeline, transfer learning, comparative evaluation | Reproducible ML workflow | Private |
| **SDN Hybrid AAA Security Platform** | Network Security | RADIUS + Kerberos hybrid AAA, policy enforcement, operational dashboard | Phased lab architecture | Private |

---

## Malware Image Classification
### Problem
Conventional malware detection pipelines are challenged by family drift, packing, and obfuscation. The objective was to design a classifier that captures structural binary behavior through visual encoding.

### Approach
- Converted executable binaries into image representations.
- Established preprocessing, quality controls, and data consistency checks.
- Trained and benchmarked multiple transfer-learning backbones.
- Structured the workflow into modular train/evaluate/inference components.
- Standardized reporting with reproducible experiment artifacts.

### Results
- Consistent high-performance classification across tested models.
- Clear model-selection signal through comparative metric analysis.
- Robust documentation trail for evaluation reproducibility.

### Engineering Value
- Demonstrates end-to-end ML project hardening from notebook-heavy exploration to structured repository design.
- Balances model experimentation with maintainable project architecture.

---

## SDN Hybrid AAA Security Platform
### Problem
Single-layer authentication is insufficient for segmented SDN environments that require identity assurance and policy-aware enforcement across access stages.

### Approach
- Implemented **hybrid AAA**: RADIUS NAC for initial admission + Kerberos step-up verification.
- Added policy-driven SDN controller enforcement for role, rate, session, and quarantine controls.
- Integrated DHCP snooping and ARP inspection for L2 trust reinforcement.
- Exposed operational telemetry via API and monitoring dashboard.
- Organized execution into phased, repeatable lab scenarios.

### Results
- Delivered a practical defense-in-depth access-control architecture for campus-style SDN.
- Validated phase progression from baseline connectivity to hybrid enforcement.
- Produced operational evidence through metrics, events, and service health outputs.

### Engineering Value
- Demonstrates security architecture thinking beyond isolated features.
- Combines control-plane logic, identity workflow, and operational observability.

---

## Technical Strengths
| Capability | Demonstrated In |
|---|---|
| Secure system design | SDN Hybrid AAA Platform |
| Policy-driven enforcement | SDN Hybrid AAA Platform |
| Reproducible ML experimentation | Malware Image Classification |
| Evaluation and evidence reporting | Both projects |
| Refactoring to professional repo structure | Both projects |

## Access and Collaboration
Source code is intentionally private.

For technical interviews, architecture walkthroughs, or controlled review access:
- Project internals can be presented live.
- Design decisions and tradeoffs can be discussed in depth.
- Selected implementation excerpts can be shared on request.

## Scope Statement
This public repository is documentation-only and excludes:
- private source code
- secrets and credentials
- sensitive infrastructure artifacts
