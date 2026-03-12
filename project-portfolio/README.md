<h1 align="center">Secure SDN AAA Platform</h1>
<p align="center"><strong>README-First Portfolio Showcase</strong></p>
<p align="center">Hybrid identity enforcement for campus networks: RADIUS NAC + Kerberos proof + SDN policy control.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Mode-README%20First-0b7285?style=for-the-badge" alt="README First" />
  <img src="https://img.shields.io/badge/Security-Hybrid%20AAA-075366?style=for-the-badge" alt="Hybrid AAA" />
  <img src="https://img.shields.io/badge/Monitoring-Dash%20%2B%20API-f59f00?style=for-the-badge" alt="Monitoring" />
  <img src="https://img.shields.io/badge/License-All%20Rights%20Reserved-5c6773?style=for-the-badge" alt="All Rights Reserved" />
</p>

<p align="center">
  <img src="./docs/assets/system-architecture.png" alt="Secure SDN full architecture diagram" width="100%" />
</p>

## Quick Navigation
- [Project Snapshot](#project-snapshot)
- [Visual Sections](#visual-sections)
- [Core Capabilities](#core-capabilities)
- [Measured Evidence](#measured-evidence)
- [Technology and Scale](#technology-and-scale)
- [Public Scope](#public-scope)

## Project Snapshot
<table>
  <tr>
    <td><strong>Tracked Files</strong><br/>206</td>
    <td><strong>Source LOC (Python)</strong><br/>8,118</td>
    <td><strong>Baseline PacketIn</strong><br/>6,843</td>
    <td><strong>Peak Throughput</strong><br/>35.1 Gbps</td>
  </tr>
</table>

## Visual Sections
<table>
  <tr>
    <td width="50%" valign="top">
      <img src="./docs/assets/campus-topology.svg" alt="Campus topology overview" width="100%" />
      <p><strong>Campus Topology</strong><br/>Segmented campus-to-datacenter network layout used in experiments.</p>
    </td>
    <td width="50%" valign="top">
      <img src="./docs/assets/security-flow.svg" alt="Security flow diagram" width="100%" />
      <p><strong>Security Flow</strong><br/>From endpoint admission to runtime containment controls.</p>
    </td>
  </tr>
</table>

## Core Capabilities
| Capability | Enforcement Outcome |
| --- | --- |
| Hybrid AAA | RADIUS admission + Kerberos step-up for sensitive services |
| Policy-Driven SDN | Role-aware allow/deny enforcement at flow level |
| L2 Trust Controls | DHCP snooping and ARP inspection against spoofing |
| Runtime Security | Session TTL, rate limits, and emergency lockdown |
| Operational Visibility | Multi-page dashboard for services, sessions, events, metrics, and proofs |

## Measured Evidence
| Metric | Value | Source Artifact |
| --- | --- | --- |
| Baseline flow setup p95 | **0.345 ms** | `data/results/baseline/20251221T182748Z/controller_metrics.json` |
| Baseline PacketIn count | **6,843** | `data/results/baseline/20251221T182748Z/controller_metrics.json` |
| Ping loss | **0.0%** | `data/results/baseline/20251221T182748Z/metrics.json` |
| Throughput | **35.1 / 35.0 Gbps** | `data/results/baseline/20251221T182748Z/metrics.json` |

## Technology and Scale
- Stack: Python 3.10+, OS-Ken, Open vSwitch, Mininet, FreeRADIUS, Kerberos KDC, Dash/Plotly, Flask.
- Scale: 206 tracked files, 8,118 source LOC, 3,420 dashboard LOC, 2,627 scripts LOC.

## Public Scope
<details>
  <summary><strong>What is intentionally public in this repository?</strong></summary>

- Architecture story and selected visual evidence.
- Quantitative metrics suitable for portfolio review.
- High-level technical framing for evaluators and recruiters.

</details>

<details>
  <summary><strong>What is intentionally excluded?</strong></summary>

- Full operational implementation and internal deployment details.
- Sensitive credentials, secrets, and private environment artifacts.

</details>

## Contact for Full Implementation
Full implementation details are available upon request.
