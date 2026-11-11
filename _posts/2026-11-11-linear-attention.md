---
layout: blog_post
title: Linear Attention
date: 2026-11-11 00:00:00 +0800
---

In the age of AI, everything below is handcrafted!!!



If you follow open-source models, you may have noticed that several recent foundation models use linear attention, such as [**Kimi K3**](https://huggingface.co/moonshotai/Kimi-K3), [**Kimi K3.1 Pro**](https://huggingface.co/moonshotai/Kimi-K3.1-Pro), and [**Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next).

I will use a series of concise, hand-drawn explanations to explore representative work on linear attention.

Each post distills one original paper, and the posts build on one another logically. By the end, you should have a solid understanding of today's most important linear-attention mechanisms—Kimi Delta Attention (KDA) and Gated DeltaNet—and be better prepared to follow how model architectures are evolving.

Feedback is welcome at flying_xf@icloud.com.



# Blog 1

I want to start from the very beginning: the paper ["Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention"](https://arxiv.org/abs/2006.16236).

The main contribution of this paper is a new kernel function that replaces the original softmax function. This decouples q and k and yields a computation method with O(nd²) complexity, where n is the sequence length and d is the hidden dimension.

![Hand-drawn diagram for the first Linear Attention post](/assets/images/blog/kda-blog-1.svg)

# Blog 2

The second post is about ["Linear Transformers Are Secretly Fast Weight Programmers"](https://arxiv.org/abs/2102.11174). Drawing on the **delta rule** proposed in early AI papers, it interprets linear attention as a key-value associative memory model and proposes **Delta Networks**.

![Hand-drawn diagram for the second Linear Attention post](/assets/images/blog/kda-blog-2.svg)
