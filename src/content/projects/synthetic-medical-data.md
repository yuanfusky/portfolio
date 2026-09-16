---
title: "Encare Hackathon 2026: Synthetic Medical Data Generation"
shortTitle: Synthetic Medical Data
slug: synthetic-medical-data
status: Hackathon Winner · Extendable Case Study
domain: Synthetic Data / Medical Data
dataType: Medical tabular data
tools:
  - Python
methods:
  - Gaussian copula
  - schema validation
  - privacy diagnostics
  - quality evaluation
  - semantic-preserving preprocessing
oneLineProblem: How can synthetic medical data remain useful and realistic while improving privacy?
whatIBuilt: An end-to-end generation and validation pipeline with quality evaluation, privacy diagnostics, CSV round-trip checks, and experiment tracking.
whatILearned: In medical data, preserving semantic meaning can matter more than applying aggressive modeling everywhere.
nextExtension: Make the pipeline configurable across medical datasets and add a dashboard comparing quality, privacy risk, and downstream utility.
interactionIdea: "Planned privacy–utility control: adjust privacy protection and inspect the resulting changes in statistical fidelity and downstream usability."
highlightValue: 1st
highlightLabel: Encare Hackathon 2026
featured: true
priority: 2
links:
  - label: GitHub repository
    url: https://github.com/biubiubiuandvivovivovivo/Encare-Hackathon-2026
---

## Problem

The hackathon goal was to generate a new synthetic medical tabular dataset from an existing synthetic dataset. The output had to remain useful and realistic while improving privacy, preserve the original schema, column order, data types, row count, statistical distributions, and relationships between variables, and pass the official submission validation.

## Data

The medical table contained hundreds of columns covering patient characteristics, measurements, operation-related variables, recovery timelines, complications, and follow-up information. Medical semantics were a central challenge: values such as `Unknown`, `Not applicable`, and blank fields represented different states and could not be collapsed into one kind of missing value.

## Method

I built a Gaussian copula hybrid pipeline. Instead of applying one complex model across every column, the system used a conservative fallback generator for the full table and Gaussian copula modeling only for a small set of reliable numeric columns. Categorical, sparse, process-related, and high-cardinality fields were handled conservatively to avoid breaking their original meaning.

## What I Built

I developed an end-to-end synthetic data pipeline with data loading, schema validation, CSV round-trip checks, local quality evaluation, privacy diagnostics, and experiment tracking. The final submission used a carefully tuned Gaussian copula hybrid strategy, achieved the best confirmed score in our experiments, and won first prize in the Encare Hackathon 2026 competition.

## What I Learned

Better synthetic data does not always come from more aggressive modeling. In medical data, preserving meaning is as important as matching numerical distributions. Applying advanced modeling only where it was safe produced stronger results than broad preprocessing or over-engineered repair rules.

## Next Extension

I would make the pipeline reusable across other medical tabular datasets through configurable column selection, privacy evaluation, and semantic rules. A further extension is an experiment dashboard for comparing synthetic quality, privacy risk, and downstream utility across generation strategies.
