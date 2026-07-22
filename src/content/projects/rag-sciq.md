---
title: Document Quality and Context Intervention Analysis for SciQ RAG Question Answering
shortTitle: SciQ RAG Evaluation
slug: sciq-rag-evaluation
status: Course Project · Extendable Case Study
domain: GenAI Evaluation / NLP
dataType: Text data
tools:
  - Python
  - sentence-transformers
methods:
  - Retrieval-Augmented Generation
  - embedding retrieval
  - ablation study
  - context intervention
  - multi-seed evaluation
oneLineProblem: How does retrieval quality affect the reliability and accuracy of RAG-based science question answering?
whatIBuilt: Reproducible evaluation scripts, experiment outputs, summary tables, paper figures, and qualitative case studies for a local RAG pipeline.
whatILearned: Retrieval quality is a major driver of RAG performance, and more context is not always better.
nextExtension: Test stronger embedding models or rerankers, add automatic retrieval-quality diagnostics, and evaluate across more datasets and generator models.
interactionIdea: "Planned RAG pipeline: Query → Retrieved Context → Generated Answer → Evaluation Result. Inspect each step to see where reliability can break down."
highlightValue: 81.4%
highlightLabel: Best RAG accuracy
featured: true
priority: 1
links: []
---

## Problem

I studied how retrieval quality affects the performance of a Retrieval-Augmented Generation system on science multiple-choice question answering. The core question was whether better retrieved evidence improves answer accuracy, and how performance changes when answer-bearing evidence is removed, compressed, shuffled, or replaced with distracting context.

## Data

I used the SciQ benchmark, a science question-answering dataset with multiple-choice questions and supporting paragraphs. The project evaluated validation subsets across multiple random seeds, including a 1,000-question evaluation for the main results.

## Method

I built a local RAG pipeline that retrieves relevant support documents using sentence-transformer embeddings, then feeds the retrieved context into an LLM-style answer generator. I compared an LLM-only baseline against RAG settings using different embedding models, chunk sizes, and top-k retrieval values. I also ran ablation studies, context intervention experiments, and an oracle gold-support experiment.

## What I Built

I implemented reproducible evaluation scripts, experiment outputs, summary tables, paper figures, and qualitative case studies. The best RAG setting used `all-MiniLM-L6-v2` with chunk size `256` and `top_k=3`, reaching about 81.4% accuracy, compared with 43.7% for the LLM-only baseline—a gain of about 37.7 percentage points.

## What I Learned

Retrieval quality was a major driver of RAG performance. Providing relevant evidence greatly improved accuracy, while removing the answer-bearing sentence caused a large drop. More context was not always better: distractor context could hurt performance, and choices such as embedding model, chunk size, and top-k affected both accuracy and latency.

## Next Extension

A natural next step is to test stronger embedding models or rerankers, add automatic retrieval-quality diagnostics, and evaluate beyond SciQ. I would also compare different generator models and study when a model relies on retrieved evidence versus internal knowledge.
