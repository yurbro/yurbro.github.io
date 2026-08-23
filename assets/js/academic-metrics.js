(() => {
  const sections = document.querySelectorAll(".academic-metrics");

  if (!sections.length) return;

  const numberFormatter = new Intl.NumberFormat(document.documentElement.lang || "en");

  sections.forEach((section) => {
    const statsUrl = section.dataset.academicStatsUrl;

    fetch(`${statsUrl}?v=${Date.now()}`, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error(`Academic statistics request failed: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        const citations = Number(data.citations);
        const hIndex = Number(data.h_index);
        const openAccessWorks = Number(data.open_access_works);
        const indexedWorks = Number(data.indexed_works);
        const listedWorks = Number(data.listed_works);

        if (![citations, hIndex, openAccessWorks, indexedWorks, listedWorks].every(Number.isFinite)) {
          throw new TypeError("Academic statistics response did not contain numeric totals.");
        }

        section.querySelector("[data-academic-citations]").textContent = numberFormatter.format(citations);
        section.querySelector("[data-academic-h-index]").textContent = numberFormatter.format(hIndex);
        section.querySelector("[data-academic-open-access]").textContent = `${numberFormatter.format(openAccessWorks)}/${numberFormatter.format(
          indexedWorks
        )}`;
        section.querySelector("[data-academic-coverage]").textContent = `${numberFormatter.format(indexedWorks)}/${numberFormatter.format(
          listedWorks
        )}`;

        const updated = section.querySelector("[data-academic-updated]");
        const updatedAt = new Date(data.updated_at);

        if (!Number.isNaN(updatedAt.getTime())) {
          updated.dateTime = data.updated_at;
          updated.textContent = `Last checked ${updatedAt.toLocaleDateString(document.documentElement.lang || "en", {
            day: "numeric",
            month: "short",
            year: "numeric",
            timeZone: "UTC",
          })}.`;
        }

        section.classList.add("academic-metrics-ready");
      })
      .catch(() => section.classList.add("academic-metrics-unavailable"));
  });
})();
