---
layout: page
title: projects
permalink: /projects/
description: Research systems spanning experimental decision-making, interpretable modelling and scientific data engineering.
nav: true
nav_order: 3
display_categories: [research]
horizontal: true
---

<div class="project-intro">
These projects form a connected research programme: experimental evidence feeds probabilistic and interpretable models; those models guide the next formulation or experimental decision; literature-mining systems extend the evidence base. Code and reproducibility materials are available where data-sharing constraints allow.
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
