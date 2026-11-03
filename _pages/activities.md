---
layout: page
title: activities
permalink: /activities/
description: Conferences, presentations, academic service and a growing photo journal.
nav: true
nav_order: 4.5
---

<p class="project-intro">A record of research presentations, conferences and scholarly service. Event photographs will appear alongside each entry when cleared images are available.</p>

## Conferences and presentations

<div class="activity-list">
  {% for event in site.data.academic_activities %}
    <section class="activity-entry" id="event-{{ event.year }}-{{ forloop.index }}">
      <div class="activity-date">{{ event.when }}</div>
      <div class="activity-body">
        <span class="activity-role">{{ event.role }}</span>
        <h3>{{ event.title }}</h3>
        {% if event.location != empty %}<p class="activity-place"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> {{ event.location }}</p>{% endif %}
        <p>{{ event.detail }}</p>
        {% if event.photos.size > 0 %}
          <div class="activity-gallery">
            {% for photo in event.photos %}
              <figure class="activity-photo">
                <a href="{{ photo.src | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="View photo: {{ photo.alt | escape }}">
                  <img src="{{ photo.src | relative_url }}" alt="{{ photo.alt | escape }}" loading="lazy">
                </a>
                {% if photo.caption %}<figcaption>{{ photo.caption }}</figcaption>{% endif %}
              </figure>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </section>
  {% endfor %}
</div>

## Photo journal

<div class="activity-photo-note">
  <i class="fa-regular fa-images" aria-hidden="true"></i>
  <div>
    <strong>Conference photographs</strong>
    <p>Personal conference photos can be attached to the relevant event above. Only approved images will be published; attendance and reviewer certificates are not represented as event photographs.</p>
  </div>
</div>

## Academic service

### Journal peer review

<div class="activity-service-grid">
  <div class="activity-service-card">
    <h3>Journal of Automation and Intelligence</h3>
    <p>Peer reviewer · 6 reviews recognised between October 2025 and September 2026.</p>
  </div>
  <div class="activity-service-card">
    <h3>Franklin Open</h3>
    <p>Peer reviewer · 7 reviews recognised between October 2025 and April 2026.</p>
  </div>
</div>

### Conference reviewing

**China Automation Congress (CAC):** reviewer contributions recognised in **2023, 2024 and 2025**.

<small>Peer review is confidential. This record lists only journal/conference names and certificate-supported recognition, not manuscript or author details.</small>
