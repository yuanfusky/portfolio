---
title: Multi-Sensor Fusion for Acoustic Tracking and Smartphone Orientation Estimation
shortTitle: Sensor Fusion
projectCode: FUSE
slug: sensor-fusion
status: Academic Project · Research Prototype
domain: Sensor Fusion / Signal Processing
dataType: Sensor data
tools:
  - MATLAB
methods:
  - TOA
  - TDOA
  - CRLB
  - SLS
  - grid search
  - Kalman filter
  - EKF
  - quaternion orientation estimation
  - outlier rejection
oneLineProblem: How can hidden physical states be estimated from noisy, indirect, and imperfect sensor measurements?
problemSummary: Estimate vehicle position and smartphone orientation from noisy, indirect measurements affected by timing errors, nonlinear observation models, imperfect calibration, and environmental disturbances.
methodsSummary: MATLAB; TOA/TDOA localization; CRLB and SLS; grid search; Kalman filtering; quaternion EKF; calibration and accelerometer/magnetometer outlier rejection.
outcomeSummary: Produced working acoustic-tracking and real-time orientation-estimation pipelines with disturbance handling and diagnostic visualizations for both sensor systems.
interactionIdea: "Planned sensor-noise control: increase measurement noise to compare raw observations against the filtered state estimate."
highlightValue: "2"
highlightLabel: Sensor systems studied
featured: true
priority: 4
links: []
---

## Problem

This project addressed two hidden-state estimation problems using noisy, indirect sensor measurements: tracking a sound-emitting RC car with a microphone network, and estimating smartphone orientation using IMU and magnetometer data. Both required handling sensor noise, imperfect calibration, nonlinear measurement models, and environmental disturbances.

## Methods, Tools & Outcome

The acoustic experiment used time-of-arrival measurements from a microphone network. I calibrated timing errors, analysed sensor geometry with the Cramér–Rao lower bound, estimated position through SLS and TDOA grid search, and tracked the vehicle with Kalman-filter models under nearly constant-velocity and coordinated-turn assumptions.

The orientation experiment used live accelerometer, gyroscope, magnetometer, and Android orientation data. I implemented a quaternion EKF in MATLAB: the gyroscope propagated orientation, gravity corrected roll and pitch, the magnetic field corrected yaw, and outlier rejection limited the impact of translational acceleration and magnetic interference.

The result was a set of working localization, tracking, and real-time orientation pipelines with diagnostic plots for trajectory, Euler-angle error, acceleration disturbance, and magnetic disturbance. The experiments made observability and sensor limitations explicit: gyroscopes drift, accelerometers fail during strong translation, magnetometers are environmentally sensitive, and microphone geometry strongly affects localization quality. A stronger extension would estimate bias online, use innovation-based gating, and add quantitative ground-truth evaluation.
