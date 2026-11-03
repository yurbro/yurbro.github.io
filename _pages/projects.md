---
layout: page
title: research
permalink: /projects/
description: Selected research projects and open-source work in AI-driven engineering.
nav: true
nav_order: 3
display_categories: [research]
horizontal: true
---

Research projects spanning formulation optimisation, interpretable modelling, scientific evidence extraction, clinical machine learning and battery intelligence. Where possible, I share code and reproducible research materials.

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

## Open-source research

Selected repositories: [PhD research code](https://github.com/yurbro/Yu-Zhang-PhD) · [SkinMiner](https://github.com/yurbro/skinminer) · [Academic website](https://github.com/yurbro/yurbro.github.io).

[Browse all repositories](/repositories/) · [GitHub profile](https://github.com/yurbro)
