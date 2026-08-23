(() => {
  const overview = document.querySelector(".visitor-overview");

  if (!overview) return;

  const total = overview.querySelector("[data-visitor-total]");
  const today = overview.querySelector("[data-visitor-today]");
  const statsUrl = overview.dataset.visitorStatsUrl;
  const numberFormatter = new Intl.NumberFormat(document.documentElement.lang || "en");

  const showUnavailable = () => {
    overview.classList.add("visitor-stats-unavailable");
    total.textContent = "—";
    today.textContent = "—";
  };

  fetch(`${statsUrl}?v=${Date.now()}`, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error(`Visitor statistics request failed: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const totalPageviews = Number(data.total_pageviews);
      const todayPageviews = Number(data.today_pageviews);

      if (!Number.isFinite(totalPageviews) || !Number.isFinite(todayPageviews)) {
        throw new TypeError("Visitor statistics response did not contain numeric totals.");
      }

      total.textContent = numberFormatter.format(totalPageviews);
      today.textContent = numberFormatter.format(todayPageviews);
      overview.classList.add("visitor-stats-ready");
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
