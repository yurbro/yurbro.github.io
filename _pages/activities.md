---
layout: page
title: activities
permalink: /activities/
description: Conferences, presentations, academic service and a growing photo journal.
nav: true
nav_order: 4.5
---

Research presentations, conference participation, scholarly service and a photo journal of academic events.

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
              {% include activities/photo.liquid photo=photo %}
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </section>
  {% endfor %}
</div>

## Research visits

<div class="activity-list">
  {% for visit in site.data.research_visits %}
    <section class="activity-entry" id="research-visit-{{ visit.year }}-{{ forloop.index }}">
      <div class="activity-date">{{ visit.when }}</div>
      <div class="activity-body">
        <span class="activity-role">{{ visit.role }}</span>
        <h3>{{ visit.title }}</h3>
        <p class="activity-place"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> {{ visit.location }}</p>
        <p>{{ visit.detail }}</p>
        {% if visit.photos.size > 0 %}
          <div class="activity-gallery">
            {% for photo in visit.photos %}
              {% include activities/photo.liquid photo=photo %}
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </section>
  {% endfor %}
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
