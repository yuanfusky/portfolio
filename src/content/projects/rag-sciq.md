---
title: Document Quality and Context Intervention Analysis for SciQ RAG Question Answering
shortTitle: SciQ RAG Evaluation
projectCode: RAG
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
problemSummary: Determine whether RAG accuracy is driven by genuinely useful evidence, and how the system fails when answer-bearing context is removed, compressed, shuffled, or replaced by distractors.
methodsOutcome: Built a reproducible local RAG evaluation pipeline with embedding retrieval, multi-seed tests, ablations, context interventions, and oracle support. The best setting reached 81.4% accuracy versus 43.7% for the LLM-only baseline.
interactionIdea: "Planned RAG pipeline: Query → Retrieved Context → Generated Answer → Evaluation Result. Inspect each step to see where reliability can break down."
highlightValue: 81.4%
highlightLabel: Best RAG accuracy
featured: true
priority: 2
links:
  - label: GitHub repository
    url: https://github.com/yuanfusky/NLP_proj
---

## Problem

I studied how retrieval quality affects the performance of a Retrieval-Augmented Generation system on science multiple-choice question answering. The core question was whether better retrieved evidence improves answer accuracy, and how performance changes when answer-bearing evidence is removed, compressed, shuffled, or replaced with distracting context.

## Methods, Tools & Outcome

I used the SciQ benchmark, a science question-answering dataset with multiple-choice questions and supporting paragraphs. The main results used a 1,000-question validation evaluation across multiple random seeds.

I built a local Python RAG pipeline that retrieves support documents with sentence-transformer embeddings and supplies the retrieved context to an LLM-style answer generator. I compared an LLM-only baseline with configurations that varied the embedding model, chunk size, and top-k retrieval value, then added ablation studies, context interventions, and an oracle gold-support experiment.

The resulting workflow produced reproducible experiment outputs, summary tables, figures, and qualitative case studies. The best configuration—`all-MiniLM-L6-v2`, chunk size `256`, and `top_k=3`—reached about 81.4% accuracy, compared with 43.7% for the LLM-only baseline, a gain of about 37.7 percentage points.

The experiments showed that relevant evidence is a major driver of RAG performance and that more context is not automatically better: distractors can reduce accuracy, while retrieval configuration affects both accuracy and latency. The next extension is to test stronger retrievers and rerankers, add retrieval-quality diagnostics, and repeat the evaluation across datasets and generator models.
