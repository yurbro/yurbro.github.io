(() => {
  const overview = document.querySelector(".visitor-overview");

  if (!overview) return;

  const total = overview.querySelector("[data-visitor-total]");
  const updated = overview.querySelector("[data-visitor-updated]");
  const warning = overview.querySelector("[data-visitor-warning]");
  const statsUrl = overview.dataset.visitorStatsUrl;
  const locale = document.documentElement.lang || "en";
  const numberFormatter = new Intl.NumberFormat(locale);
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  });

  const setWarning = (message) => {
    warning.textContent = message;
    warning.hidden = false;
  };

  const showUnavailable = () => {
    overview.classList.add("visitor-stats-unavailable");
    total.textContent = "—";
    updated.textContent = "—";
    setWarning("The statistics feed is temporarily unavailable. Use Detailed statistics for the provider's latest information.");
  };

  fetch(`${statsUrl}?v=${Date.now()}`, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error(`Visitor statistics request failed: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const totalLoads = Number(data.total_visits);
      const syncedAt = new Date(data.updated_at);

      if (!Number.isSafeInteger(totalLoads) || totalLoads < 0 || !Number.isFinite(syncedAt.getTime())) {
        throw new TypeError("Invalid MapMyVisitors count or timestamp.");
      }

      total.textContent = numberFormatter.format(totalLoads);
      updated.textContent = dateFormatter.format(syncedAt);
      overview.classList.add("visitor-stats-ready");

      const feedAgeMs = Date.now() - syncedAt.getTime();
      if (feedAgeMs > 12 * 60 * 60 * 1000 || feedAgeMs < -10 * 60 * 1000) {
        overview.classList.add("visitor-stats-stale");
        setWarning("The published counter snapshot may be delayed. Consult Detailed statistics for more recent activity.");
      }
    })
    .catch(showUnavailable);

  const secureMapLink = () => {
    const mapLink = document.querySelector("#mapmyvisitors-widget");
    if (!mapLink) return false;

    mapLink.href = "https://mapmyvisitors.com/web/1c7nt";
    mapLink.setAttribute("aria-label", "Open detailed visitor statistics");
    return true;
  };

  if (!secureMapLink()) {
    const observer = new MutationObserver(() => {
      if (secureMapLink()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 10000);
  }
})();
