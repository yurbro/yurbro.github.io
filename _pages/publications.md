---
layout: page
permalink: /publications/
title: publications
description: Published and accepted research, with preprints listed separately.
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications">
  {% bibliography %}
</div>

## Preprints & manuscripts under review

Preprints and manuscripts under review are shown separately from published and accepted papers.

<div class="publications">
  {% bibliography --file preprints --group_by none %}
</div>
