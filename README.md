# Utsav Agarwal — Backend Developer Portfolio

A personalized backend engineering portfolio built from the original award-winning website template.
The UI keeps the existing GSAP animations, scroll triggers, and dark, brutalist aesthetic while reflecting Utsav's backend experience.

## Table of Contents

1. [About](#about)
2. [Tech Stack](#tech-stack)
3. [Project Highlights](#project-highlights)
4. [Run Locally](#run-locally)
5. [Cleanup](#cleanup)

## About

This repository showcases backend work focused on:

- Event orchestration with Spring Boot and Kafka
- High-performance matching engines in Golang
- Scalable event automation systems
- Distributed ETL and event reconciliation pipelines
- Backend infrastructure, observability, and production readiness

The site is wired to use portfolio data from `src/data/portfolio.js` and preserves all GSAP/ScrollTrigger logic.

## Tech Stack

- React.js
- Tailwind CSS
- GSAP
- Java
- Golang
- Kafka
- PostgreSQL
- Redis
- Elasticsearch

## Project Highlights

- **ChronoX Exchange** — high-performance Golang matching engine with sub-millisecond simulated latency
- **Eventra** — scalable Java/Kafka event automation backend handling 1K concurrent triggers in simulation
- **TCS experience** — centralized event orchestrator, ELK reconciliation, and remote batch partitioning for production ETL

## Run Locally

```bash
git clone https://github.com/Utsav7428/award-winning-website.git
cd award-winning-website
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Cleanup

Unused template assets and legacy media files were removed to keep the repository lean.

- Removed unused public image and video files
- Kept only active fonts and the audio loop used by the current portfolio
- Updated portfolio links and centralized data in `src/data/portfolio.js`

## Notes

This project is now a clean, portfolio-focused version of the original template, tailored to backend engineering and infrastructure storytelling.
