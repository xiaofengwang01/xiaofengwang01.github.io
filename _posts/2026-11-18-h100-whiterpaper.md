---
layout: blog_post
title: Inside the NVIDIA H100 GPU Architecture
date: 2026-11-18 00:00:00 +0800
description: >-
  A whitepaper-driven overview of the NVIDIA H100 GPU, covering its major
  hardware changes, CUDA programming model additions, and communication features.
tags: ["GPU architecture", "H100", "CUDA"]
---

This post is based on NVIDIA's H100 whitepaper. I want to understand what changed in the Hopper architecture, why those changes matter, and how they fit into modern AI systems.

Reference: [NVIDIA H100 Tensor Core GPU whitepaper](https://resources.nvidia.com/en-us-hopper-architecture/nvidia-h100-tensor-c)

It is written for readers who already know basic CUDA and GPU concepts, but have not yet explored the newer features introduced with the H series.

I will split the discussion into two parts:

- **Hardware and architecture:** the major hardware specifications and new components such as the **Tensor Memory Accelerator**.
- **Software and platform features:** programming-model additions such as **thread block clusters**, communication upgrades such as the **NVLink Switch network**, and confidential computing.

The diagram below summarizes the roadmap for this post.

![Hand-drawn overview of the NVIDIA H100 GPU architecture](/assets/images/blog/h100-whitepaper-overview.svg)
