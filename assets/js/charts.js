/* Thin Chart.js wrappers so page scripts stay one-liners. */

const Charts = {
  palette: ["#0f766e", "#2563eb", "#d97706", "#7c3aed", "#db2777", "#059669", "#dc2626", "#64748b"],

  line(ctx, labels, data, label = "Value") {
    return new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            borderColor: "#0f766e",
            backgroundColor: "rgba(15,118,110,0.08)",
            fill: true,
            tension: 0.35,
            pointRadius: 3,
            pointBackgroundColor: "#0f766e",
          },
        ],
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { ticks: { callback: (v) => v.toLocaleString() }, grid: { color: "#f1f5f9" } },
          x: { grid: { display: false } },
        },
      },
    });
  },

  donut(ctx, labels, data) {
    return new Chart(ctx, {
      type: "doughnut",
      data: { labels, datasets: [{ data, backgroundColor: this.palette, borderWidth: 2, borderColor: "#fff" }] },
      options: { cutout: "68%", plugins: { legend: { position: "bottom", labels: { boxWidth: 10, padding: 14, font: { size: 11 } } } } },
    });
  },

  lineMulti(ctx, labels, datasets) {
    return new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: datasets.map((d, i) => ({
          label: d.label,
          data: d.data,
          borderColor: d.color || this.palette[i],
          backgroundColor: "transparent",
          borderDash: d.dashed ? [6, 4] : [],
          tension: 0.25,
          pointRadius: d.dashed ? 0 : 2.5,
          borderWidth: 2,
        })),
      },
      options: {
        plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 11 } } } },
        scales: {
          y: { ticks: { callback: (v) => v.toLocaleString() }, grid: { color: "#f1f5f9" } },
          x: { grid: { display: false } },
        },
      },
    });
  },

  bar(ctx, labels, datasets) {
    return new Chart(ctx, {
      type: "bar",
      data: { labels, datasets: datasets.map((d, i) => ({ ...d, backgroundColor: d.color || this.palette[i], borderRadius: 4 })) },
      options: {
        plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 11 } } } },
        scales: { y: { ticks: { callback: (v) => v.toLocaleString() }, grid: { color: "#f1f5f9" } }, x: { grid: { display: false } } },
      },
    });
  },
};
