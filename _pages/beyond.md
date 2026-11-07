---
layout: page
title: beyond the lab
permalink: /beyond/
description: Places, interests and everyday moments beyond research.
nav: true
nav_order: 5
---

<div class="beyond-intro">
  <p class="beyond-intro-quote">Life is more than experiments, algorithms and papers.</p>
  <p class="beyond-intro-description">This is a small collection of places, interests and everyday moments beyond my academic work.</p>
</div>

## Places & Journeys

Exploring new places offers a different perspective beyond research. I have begun this photo journal with a view of Prague from my 2026 visit to the Czech Republic.

<figure class="beyond-photo beyond-photo-featured">
  <a href="/assets/img/activities/chisa-2026-09-prague.jpg" target="_blank" rel="noopener noreferrer">
    <picture>
      {% if site.imagemagick.enabled %}
        <source
          type="image/webp"
          srcset="{% for width in site.imagemagick.widths %}{{ '/assets/img/activities/chisa-2026-09-prague' | relative_url }}-{{ width }}.webp {{ width }}w{% unless forloop.last %}, {% endunless %}{% endfor %}"
          sizes="(min-width: 1080px) 930px, 92vw"
        >
      {% endif %}
      <img
        src="{{ '/assets/img/activities/chisa-2026-09-prague.jpg' | relative_url }}"
        alt="A city view of Prague photographed during my 2026 visit"
        width="1152"
        height="1536"
        loading="lazy"
        decoding="async"
      >
    </picture>
  </a>
  <figcaption>Prague, Czech Republic · 2026</figcaption>
</figure>

## Things I Enjoy

A space for personal interests, creative pursuits and activities outside academic research. I will add selected photographs and stories as this collection grows.

## Little Moments

Everyday scenes and small memories worth keeping, from life in the UK and elsewhere. This section will gradually grow with personal photographs.

---

<small>Academic conference presentations, volunteering and scholarly service are documented separately in [Academic Activities](/activities/).</small>
