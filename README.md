<div align="center">

# Security & AI Portfolio

**Selected cybersecurity and AI projects with private source repositories**

![Status](https://img.shields.io/badge/Repositories-Private-blue)
![Focus](https://img.shields.io/badge/Focus-Cybersecurity%20%26%20AI-0A66C2)
![Type](https://img.shields.io/badge/Portfolio-Technical-1F883D)

</div>

## Project Cards

| Project | Domain | Stack | Repository |
|---|---|---|---|
| **Malware Image Classification** | AI + Cybersecurity | Python, TensorFlow/Keras, OpenCV, NumPy, Scikit-learn | Private |
| **SDN Hybrid AAA Security Platform** | Network Security | Python, OS-Ken, Mininet, FreeRADIUS, Kerberos, Dash | Private |

---

## Malware Image Classification

### Problem
Malware detection pipelines often degrade under family variation and obfuscation patterns. The objective was to design a robust classifier using binary-to-image representation and systematic model evaluation.

### Approach
- Converted executable binaries into image-like tensors.
- Implemented preprocessing and data quality checks.
- Ran transfer-learning experiments across multiple CNN backbones.
- Built reproducible training, evaluation, and inference workflow.
- Documented comparison metrics and decision rationale.

### Results
- Stable high classification performance across candidate models.
- Clear model ranking based on accuracy and generalization behavior.
- Reproducible artifact generation for evaluation and reporting.

---

## SDN Hybrid AAA Security Platform

### Problem
Single-layer authentication in campus SDN environments is insufficient for modern access control requirements. The goal was a defense-in-depth AAA architecture with policy-aware enforcement.

### Approach
- Implemented hybrid AAA flow: RADIUS NAC + Kerberos step-up authentication.
- Added policy-driven SDN controller enforcement for role/session/quarantine behavior.
- Integrated DHCP snooping and ARP inspection for trust hardening.
- Built dashboard and API layer for operational visibility.
- Structured execution scripts for phased, repeatable experiments.

### Results
- Working multi-layer access control architecture for SDN.
- Verified baseline-to-hybrid progression through controlled phases.
- Produced operational evidence from metrics, events, and service health traces.

---

## Access Policy
Source code is private by design.

Technical walkthrough, architecture review, and implementation discussion are available upon request.

## Repository Scope
This repository is intentionally documentation-focused and excludes:
- private source code
- sensitive credentials
- restricted infrastructure artifacts

