---
title: AI-Based Fault Diagnosis for Gas Turbine Sensor Systems
shortTitle: Gas Turbine Fault Diagnosis
projectCode: FAULT
slug: gas-turbine-fault-diagnosis
status: Industry Collaboration · In Progress
domain: Industrial AI / Fault Diagnosis
dataType: Multivariate sensor time series
tools:
  - Python
  - scikit-learn
methods:
  - normal-behaviour modelling
  - residual analysis
  - robust statistics
  - EWMA / CUSUM
  - OOD detection
  - fault localization
oneLineProblem: How can sensor faults be detected and localized under changing gas-turbine operating conditions without turning normal variation into false alarms?
problemSummary: Distinguish true failures in gas-turbine pulsation sensors from changes caused by load, temperature, noise, missing data, unfamiliar operating conditions, or simultaneous faults.
methodsSummary: Python and scikit-learn; normal-behaviour regression; prediction and 085/095 pairwise residuals; robust MAD normalization; EWMA/CUSUM; persistence, hysteresis, and OOD checks.
outcomeSummary: Targeting an interpretable diagnostic prototype that localizes FAULT_085, FAULT_095, or FAULT_BOTH from chronological 1 Hz data while controlling false alarms.
interactionIdea: "Planned diagnostic timeline: inspect operating conditions, expected sensor behaviour, residual scores, alarm state, and the final localized fault hypothesis."
highlightValue: 8 + 4
highlightLabel: Prediction and pairwise residual channels
featured: true
priority: 1
links: []
---

## Problem

This Linköping University project, developed in collaboration with Siemens Energy, addresses fault diagnosis for gas-turbine pulsation sensor systems. The central challenge is to separate a genuine sensor failure from expected changes caused by load, temperature, fuel flow, operating transitions, measurement noise, or unfamiliar operating conditions. The diagnostic logic must also handle missing values, control false alarms, and distinguish faults affecting sensor channel 085, channel 095, or both.

## Methods, Tools & Target Outcome

The system is being designed as an interpretable Python diagnostic pipeline. A normal-behaviour regression model learns the expected values of eight pulsation signals from healthy operating data. It produces prediction residuals by comparing actual and expected measurements, while additional pairwise residuals track whether the normal relationship between the 085 and 095 channels has changed.

Residuals are normalized against healthy behaviour using robust median and MAD statistics. EWMA or CUSUM captures sustained changes, while persistence and hysteresis prevent isolated spikes from repeatedly switching alarms on and off. Operating-condition OOD detection is kept separate from fault evidence so that an unfamiliar operating point is not confused with a failing sensor.

The main technical difficulty is fault localization with limited labelled failure data. The planned decision layer combines residual magnitude, direction, frequency-band consistency, and duration to produce interpretable hypotheses: `FAULT_085`, `FAULT_095`, `FAULT_BOTH`, or `AMBIGUOUS`. The target outcome is a low-false-alarm diagnostic prototype that can replay chronologically ordered 1 Hz sensor data and explain why each alarm was produced.
