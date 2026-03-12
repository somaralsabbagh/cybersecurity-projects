# Technical Overview - Secure SDN AAA Platform

## Scope of This Public Document
This document presents the high-level technical design and measured outcomes of the Secure SDN AAA platform.
Operational runbooks, deployment secrets, and full internal implementation details are intentionally excluded.

## Security Architecture
The platform enforces identity and access in layers:
1. Endpoint appears and is tracked by edge bindings (MAC/IP context).
2. RADIUS performs initial admission control (NAC).
3. SDN controller applies role-aware policy and forwarding rules.
4. Kerberos provides step-up proof for protected services.
5. Runtime controls continue enforcement (sessions, rate limits, lockdown).

## Major Components
- SDN Controller (`OS-Ken`): central decision engine for policy enforcement.
- AAA Layer:
- RADIUS path for network admission.
- Kerberos path for service-level authorization.
- Trust and Hardening:
- DHCP snooping.
- ARP inspection.
- Brute-force resistance (rate limiting).
- Session lifecycle and emergency lockdown.
- Observability:
- Dashboard pages for overview, sessions, events, services, metrics, network, proofs, and lockdown.

## Experiment Model
Evaluation scenarios:
1. Baseline forwarding.
2. RADIUS-only.
3. Kerberos-only.
4. Hybrid mode.

Key artifacts are captured under `data/results/` as structured logs and JSON metrics.

## Selected Quantitative Evidence
- Baseline flow setup p95: `0.345 ms`
- Baseline packet-in count: `6843`
- Baseline ping loss: `0.0%`
- Throughput samples: `35.1 Gbits/sec`, `35.0 Gbits/sec`

Reference artifacts:
- `data/results/baseline/20251221T182748Z/controller_metrics.json`
- `data/results/baseline/20251221T182748Z/metrics.json`
- `data/results/latest/controller_metrics.json`

## Public Repository Boundaries
- This repository is a portfolio-oriented public mirror.
- The complete implementation repository remains private.
- Any production-like credentials or secret materials are excluded from this public package.
