---
layout: page
title: Visitor overview
permalink: /visitors/
description: Aggregate visits and the worldwide reach of Yu Zhang's academic website.
nav: false
---

<div
  class="visitor-overview"
  data-visitor-stats-url="https://raw.githubusercontent.com/yurbro/yurbro.github.io/visitor-stats/visitor-stats.json"
>
  <div class="visitor-intro">
    <div class="visitor-intro-icon" aria-hidden="true"><i class="fa-solid fa-earth-europe"></i></div>
    <div>
      <div class="visitor-kicker">Academic reach</div>
      <p>
        A lightweight view of recorded map-widget loads and approximate visitor locations. Earlier tracking covered this page only;
        site-wide tracking began with the updated tracker, so historical visits to other pages cannot be reconstructed.
      </p>
    </div>
  </div>

  <div class="visitor-metrics" aria-label="Website visitor statistics" aria-live="polite">
    <div class="visitor-metric">
      <span class="visitor-metric-icon" aria-hidden="true"><i class="fa-solid fa-chart-simple"></i></span>
      <strong data-visitor-total>—</strong>
      <span>Tracked widget loads</span>
    </div>
    <div class="visitor-metric">
      <span class="visitor-metric-icon" aria-hidden="true"><i class="fa-regular fa-clock"></i></span>
      <strong data-visitor-updated>—</strong>
      <span>Last sync (UTC)</span>
    </div>
    <a class="visitor-metric visitor-metric-link" href="https://mapmyvisitors.com/web/1c7nt">
      <span class="visitor-metric-icon" aria-hidden="true"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
      <strong>Source</strong>
      <span>Detailed statistics</span>
    </a>
  </div>

  <p class="visitor-privacy-note">
    Counts represent requests recorded by MapMyVisitors, not unique individuals or guaranteed page views. Browser blocking, caching and
    automated traffic may affect the totals.
  </p>
  <p class="visitor-privacy-note" data-visitor-warning hidden></p>

  <div class="visitor-map-card">
    <div class="visitor-map-heading">
      <div>
        <div class="visitor-kicker">Worldwide readership</div>
        <h2>Visitor map</h2>
      </div>
      <span class="visitor-map-status"><i class="fa-solid fa-rotate"></i> Map updates when viewed</span>
    </div>

    <div class="visitor-map-shell">
      <script
        type="text/javascript"
        id="mapmyvisitors"
        src="https://mapmyvisitors.com/map.js?d=-sm6w_a1PM33DsMrtfDz9TfNp4I9HXXcsItpzWPES6k&cl=ffffff&w=a"
      ></script>
      <noscript>
        <a href="https://mapmyvisitors.com/web/1c7nt" title="View visitor statistics">
          <img
            src="https://mapmyvisitors.com/map.png?d=-sm6w_a1PM33DsMrtfDz9TfNp4I9HXXcsItpzWPES6k&cl=ffffff"
            alt="Map showing the approximate countries and regions of website visitors"
          >
        </a>
      </noscript>
    </div>

  </div>

  <p class="visitor-privacy-note">
    <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
    The map is rendered by MapMyVisitors using approximate IP-based location data. This page publishes aggregate statistics, not
    individual IP addresses or browsing histories.
  </p>
</div>

<script defer src="{{ '/assets/js/visitor-stats.js' | relative_url }}"></script>
