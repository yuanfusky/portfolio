---
title: "Encare Hackathon 2026: Synthetic Medical Data Generation"
shortTitle: Synthetic Medical Data
projectCode: SYN
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
problemSummary: Generate a privacy-improving medical table without breaking its schema, statistical relationships, or the distinct meanings of Unknown, Not applicable, and blank values across hundreds of columns.
methodsOutcome: Built a Gaussian-copula hybrid pipeline with conservative fallbacks, schema validation, privacy diagnostics, quality evaluation, and CSV round-trip checks. The final strategy produced the best confirmed team score and won 1st prize.
interactionIdea: "Planned privacy–utility control: adjust privacy protection and inspect the resulting changes in statistical fidelity and downstream usability."
highlightValue: 1st
highlightLabel: Encare Hackathon 2026
featured: true
priority: 3
links:
  - label: GitHub repository
    url: https://github.com/biubiubiuandvivovivovivo/Encare-Hackathon-2026
---

## Problem

The hackathon goal was to generate a new synthetic medical tabular dataset from an existing synthetic dataset. The output had to remain useful and realistic while improving privacy, preserve the original schema, column order, data types, row count, statistical distributions, and relationships between variables, and pass the official submission validation.

## Methods, Tools & Outcome

The medical table contained hundreds of columns covering patient characteristics, measurements, operation-related variables, recovery timelines, complications, and follow-up information. Because `Unknown`, `Not applicable`, and blank fields represented different medical or survey states, the pipeline treated semantic preservation as a first-class validation requirement.

I implemented a Gaussian-copula hybrid approach in Python. A conservative fallback generator protected the full schema, while Gaussian copula modelling was applied only to reliable numeric subsets. Categorical, sparse, process-related, and high-cardinality fields were handled conservatively rather than forced through one global model.

The end-to-end workflow included data loading, schema validation, CSV round-trip checks, local quality evaluation, privacy diagnostics, and experiment tracking. This carefully tuned strategy achieved the best confirmed score in our experiments and won first prize in the Encare Hackathon 2026. It also demonstrated that selective modelling and semantic safeguards can outperform aggressive preprocessing; the next step is to make those rules configurable across other medical datasets.
