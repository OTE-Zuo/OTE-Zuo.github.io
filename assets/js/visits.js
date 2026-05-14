(async function () {
  const params = new URLSearchParams(location.search);
  if (params.get("stats") === "1") {
    localStorage.setItem("showVisitStats", "1");
  }
  if (params.get("stats") === "0") {
    localStorage.removeItem("showVisitStats");
  }
  if (localStorage.getItem("showVisitStats") !== "1") return;

  const canonicalHost = "ote-zuo.github.io";
  const pageName = location.pathname.split("/").pop() || "index.html";
  const path = pageName.endsWith(".html") ? `/${pageName}` : "/index.html";
  const referer = `https://${canonicalHost}${path}`;
  const shouldCount = location.hostname === canonicalHost;

  const stats = document.createElement("aside");
  stats.className = "private-visit-stats";
  stats.setAttribute("aria-label", "Private visit statistics");
  stats.innerHTML = `
    <strong>访问统计</strong>
    <span>总访问量 <b data-site-pv>...</b></span>
    <span>访客数 <b data-site-uv>...</b></span>
    <span>本页访问 <b data-page-pv>...</b></span>
  `;
  document.body.appendChild(stats);

  const sitePv = stats.querySelector("[data-site-pv]");
  const siteUv = stats.querySelector("[data-site-uv]");
  const pagePv = stats.querySelector("[data-page-pv]");

  try {
    const response = await fetch("https://bsz.saop.cc/api", {
      method: shouldCount ? "POST" : "GET",
      credentials: "include",
      headers: {
        "x-bsz-referer": referer
      }
    });
    const result = await response.json();
    if (!result.success) return;

    const formatter = new Intl.NumberFormat(document.documentElement.lang || "en");
    sitePv.textContent = formatter.format(result.data.site_pv);
    siteUv.textContent = formatter.format(result.data.site_uv);
    pagePv.textContent = formatter.format(result.data.page_pv);
  } catch (error) {
    stats.remove();
  }
})();
