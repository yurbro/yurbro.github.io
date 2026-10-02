---
layout: page
title: projects
permalink: /projects/
description: Research in formulation design, clinical machine learning, interpretable modelling and scientific data engineering.
nav: true
nav_order: 3
display_categories: [research]
horizontal: true
---

<div class="project-intro">
My projects connect data-efficient modelling with practical decisions in formulation science and healthcare. They span adaptive experimental design, early prediction, interpretable models, scientific evidence extraction and clinical outcome modelling. Code and reproducibility materials are available where data-sharing constraints allow.
</div>
<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
  </div>
  {% endfor %}
{% endif %}
</div>
