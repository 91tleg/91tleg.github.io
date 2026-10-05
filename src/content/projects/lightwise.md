---
name: LightWise
order: 1
github: https://github.com/91tleg/LightWise
---

A fault-tolerant telemetry platform for streetlights. Each light is an autonomous ESP32 edge node running ESP-IDF and FreeRTOS. It detects its own faults, degrades gracefully, and reports over LoRaWAN to an AWS Lambda backend and a web dashboard, so crews are only sent out when remote diagnostics confirm a real problem.
