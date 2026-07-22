---
title: Multi-Sensor Fusion for Acoustic Tracking and Smartphone Orientation Estimation
shortTitle: Sensor Fusion
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
whatIBuilt: MATLAB localization, tracking, and quaternion-EKF pipelines with calibration, disturbance rejection, and diagnostic visualizations.
whatILearned: Observability, calibration, sensor geometry, and carefully chosen correction signals determine whether fusion remains stable.
nextExtension: Estimate bias online, use innovation-based statistical gating, compare filter formulations, and add quantitative ground-truth evaluation.
interactionIdea: "Planned sensor-noise control: increase measurement noise to compare raw observations against the filtered state estimate."
highlightValue: "2"
highlightLabel: Sensor systems studied
featured: true
priority: 3
links: []
---

## Problem

This project addressed two hidden-state estimation problems using noisy, indirect sensor measurements: tracking a sound-emitting RC car with a microphone network, and estimating smartphone orientation using IMU and magnetometer data. Both required handling sensor noise, imperfect calibration, nonlinear measurement models, and environmental disturbances.

## Data

The acoustic experiment used time-of-arrival measurements from microphones placed around a driving area. The orientation experiment used live accelerometer, gyroscope, magnetometer, and Android orientation data streamed from a phone. Stationary calibration data was used to estimate bias and noise covariance.

## Method

For acoustic localization, I modeled TOA and TDOA measurements, calibrated microphone timing errors, analyzed sensor geometry with the Cramér–Rao lower bound, and estimated position through SLS and TDOA grid search. Kalman-filter-based models then tracked the vehicle under nearly constant velocity and coordinated-turn assumptions.

For orientation, I implemented a quaternion-based EKF. The gyroscope propagated orientation through time, the accelerometer corrected roll and pitch through gravity, and the magnetometer corrected yaw through the earth's magnetic field. Outlier rejection handled acceleration disturbances and magnetic interference.

## What I Built

- A MATLAB pipeline for microphone calibration, TOA/TDOA localization, CRLB analysis, and trajectory tracking.
- KF and EKF tracking models using artificial position measurements and direct TDOA observations.
- A real-time smartphone orientation EKF using quaternion states.
- Disturbance rejection for accelerometer and magnetometer measurements.
- Diagnostic visualizations for orientation error, Euler-angle error, acceleration disturbance, and magnetic disturbance.

## What I Learned

Gyroscopes respond quickly but drift without absolute references. Accelerometers can correct roll and pitch but become unreliable under fast translation. Magnetometers make yaw observable but are sensitive to environmental interference. In acoustic localization, sensor geometry strongly affected observability and estimation accuracy.

## Next Extension

I would estimate sensor bias online, replace simple norm-based outlier rejection with innovation-based statistical gating, and compare the orientation EKF with complementary and error-state filters. For acoustic tracking, I would add ground-truth evaluation and tune motion models against recorded trajectory metrics.
