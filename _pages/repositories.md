---
layout: page
permalink: /repositories/
title: repositories
description: Open research code, reproducibility materials and active projects.
nav: true
nav_order: 4
---

## GitHub profile

<div class="github-profile-panel">
  <div class="github-profile-mark" aria-hidden="true">
    <i class="fa-brands fa-github"></i>
  </div>
  <div class="github-profile-copy">
    <span class="github-profile-label">Open research on GitHub</span>
    <h3>@{{ site.data.repositories.github_username }}</h3>
    <p>Code, reproducibility materials and active research projects spanning AI-enabled formulation design, scientific machine learning and LLM-assisted evidence mining.</p>
  </div>
  <a class="github-profile-link" href="{{ site.data.repositories.github_profile_url }}" target="_blank" rel="noopener noreferrer">
    View profile <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
  </a>
</div>

## Featured repositories

<div class="repository-card-grid">
  {% for repo in site.data.repositories.featured_repositories %}
    <a class="repository-card" href="{{ repo.url }}" target="_blank" rel="noopener noreferrer">
      <div class="repository-card-top">
        <span class="repository-card-icon" aria-hidden="true"><i class="{{ repo.icon }}"></i></span>
        <span class="repository-card-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
      </div>
      <span class="repository-card-label">{{ repo.label }}</span>
      <h3>{{ repo.name }}</h3>
      <p>{{ repo.description }}</p>
      <span class="repository-card-footer"><i class="fa-brands fa-github" aria-hidden="true"></i> github.com/yurbro</span>
    </a>
  {% endfor %}
</div>
