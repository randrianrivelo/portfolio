(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const SQL = '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="#b04a2d" stroke-width="1.6" aria-hidden="true"><ellipse cx="12" cy="5.5" rx="7.5" ry="3"/><path d="M4.5 5.5v6.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5.5M4.5 12v6.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V12"/></svg>';
  const API = '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="#b04a2d" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 4c-2 0-3 1-3 3v2c0 1.5-1 3-2.500 3 1.500 0 2.500 1.500 2.500 3v2c0 2 1 3 3 3M16 4c2 0 3 1 3 3v2c0 1.500 1 3 2.500 3-1.500 0-2.500 1.500-2.500 3v2c0 2-1 3-3 3"/></svg>';
  const ICONS = {};
  Object.values(SKILLS).flat().forEach(([n, c]) => ICONS[n] = c);
  const icon = (n, dot) => ICONS[n] === "sql" ? SQL : ICONS[n] === "api" ? API : ICONS[n] ? `<i class="devicon-${ICONS[n]} colored ico" aria-hidden="true"></i>` : dot ? '<i class="ico dot" aria-hidden="true"></i>' : "";
  const TC = { Web: "#1d1a18", Data: "#b04a2d", Mobile: "#4a3b30", Backend: "#2b3a35", Hackathon: "#7a3a22", "Académique": "#5a4f44" };
  const num = i => String(i + 1).padStart(2, "0");
  const tags = a => a.length ? `<ul class="tags">${a.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : "";

  /* Contacts, photo, CV : pilotés par SITE (projects.js) */
  $$("[data-github]").forEach(a => a.href = SITE.github);
  $$("[data-linkedin]").forEach(a => a.href = SITE.linkedin);
  $$("[data-email]").forEach(a => { if (!SITE.email) return; a.href = "mailto:" + SITE.email; a.hidden = false; const b = $("b", a); if (b) b.textContent = SITE.email; });
  $$("[data-phone]").forEach(a => { if (!SITE.phone) return; a.href = "tel:" + SITE.phoneTel; a.hidden = false; const b = $("b", a); if (b) b.textContent = SITE.phone; });
  $$("[data-cv]").forEach(a => {
    const b = $("b", a); a.hidden = false;
    if (SITE.cv) { a.href = SITE.cv; a.target = "_blank"; a.rel = "noopener noreferrer"; b ? b.textContent = "Voir mon CV (PDF)" : a.textContent = "Voir mon CV ↗"; }
    else { a.removeAttribute("href"); a.classList.add("soon"); a.setAttribute("aria-disabled", "true"); b ? b.textContent = "Bientôt disponible" : a.textContent = "CV · bientôt disponible"; }
  });
  const person = $(".person");
  if (person && SITE.photo) {
    const img = new Image(); img.src = SITE.photo; img.alt = "Portrait de " + SITE.name; img.width = 1000; img.height = 1133; img.decoding = "async";
    img.onload = () => { person.textContent = ""; person.appendChild(img); person.closest(".photo").classList.add("has-photo"); };
  }
  const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* Menu mobile */
  const btn = $(".menu"), nav = $("#nav");
  if (btn) {
    const set = o => { nav.classList.toggle("open", o); btn.setAttribute("aria-expanded", o); };
    btn.addEventListener("click", () => set(!nav.classList.contains("open")));
    nav.addEventListener("click", e => { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") { set(false); btn.focus(); } });
  }

  /* En-tête + progression */
  const head = $("header.site"), bar = $("#bar");
  const onScroll = () => {
    const h = document.documentElement, m = h.scrollHeight - h.clientHeight;
    head.classList.toggle("s", scrollY > 8);
    bar.style.width = (m > 0 ? scrollY / m * 100 : 0) + "%";
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* Cartes projet */
  const grid = $("#grid");
  if (grid) {
    const card = (p, i) => `
      <article class="card reveal">
        <div class="thumb${p.image ? " im" : ""}" style="--tc:${TC[p.category] || TC.Web}">
          ${p.image ? `<img src="${esc(p.image)}" alt="Illustration du projet ${esc(p.title)}" loading="lazy" width="640" height="440">` : ""}
          <div class="tr"><span class="tn">${num(i)}</span><div class="ti">${p.tech.map(t => ICONS[t] ? `<span title="${esc(t)}">${icon(t)}</span>` : "").slice(0, 4).join("")}</div></div>
          <div class="tt">${esc(p.title)}</div>
        </div>
        <div class="cb">
          <div class="meta"><span class="k">${esc(p.category)}</span>${p.status ? `<span class="st">${esc(p.status)}</span>` : ""}</div>
          ${p.image ? `<h3 class="ct">${esc(p.title)}</h3>` : ""}
          <p>${esc(p.summary)}</p>${tags(p.tech)}
          <div class="go"><a class="more-l" href="project.html?id=${encodeURIComponent(p.id)}" aria-label="Voir le projet ${esc(p.title)}">Voir le projet <i aria-hidden="true">→</i></a>
          ${p.github ? `<a class="src" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer" aria-label="Code source de ${esc(p.title)} sur GitHub">Code source ↗</a>` : ""}</div>
        </div></article>`;
    const render = cat => {
      grid.innerHTML = PROJECTS.map((p, i) => ({ p, i })).filter(({ p }) => cat === "Tout" || p.category === cat).map(({ p, i }) => card(p, i)).join("");
      reveal(grid);
    };
    const cats = ["Tout", ...new Set(PROJECTS.map(p => p.category))];
    const f = $("#filters");
    f.innerHTML = cats.map((c, i) => `<button type="button" data-c="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}<small>${c === "Tout" ? PROJECTS.length : PROJECTS.filter(p => p.category === c).length}</small></button>`).join("");
    f.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      $$("button", f).forEach(x => x.setAttribute("aria-pressed", x === b));
      render(b.dataset.c);
    });
    render("Tout");
  }

  /* Compétences */
  const sk = $("#skills");
  if (sk) sk.innerHTML = Object.entries(SKILLS).map(([cat, items], i) => `
    <div class="skc reveal"><div class="skh"><span class="n">0${i + 1}</span><h3>${esc(cat)}</h3></div>
    <ul>${items.map(([n]) => `<li>${icon(n)}<span>${esc(n)}</span></li>`).join("")}</ul></div>`).join("");

  /* Fiche projet */
  const pg = $("#project");
  if (pg) {
    const id = new URLSearchParams(location.search).get("id");
    const i = PROJECTS.findIndex(x => x.id === id), p = PROJECTS[i];
    if (!p) pg.innerHTML = `<h1>Projet introuvable</h1><p><a class="btn" href="index.html#projets">← Tous les projets</a></p>`;
    else {
      document.title = `${p.title} — ${SITE.name}`;
      const nb = (q, lab) => q ? `<a href="project.html?id=${encodeURIComponent(q.id)}"><small>${lab}</small><b>${esc(q.title)}</b></a>` : "";
      const links = [p.github && `<a class="btn p" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">Code source</a>`,
                     p.demo && `<a class="btn" href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer">Démonstration</a>`].filter(Boolean).join("");
      const sec = (t, items) => `<h2>${esc(t)}</h2><ul>${items.map(x => `<li class="f">${esc(x)}</li>`).join("")}</ul>`;
      pg.innerHTML = `
        <a class="back" href="index.html#projets">← Tous les projets</a>
        <div class="ph" style="--tc:${TC[p.category] || TC.Web}">
          <div class="meta"><span class="k">${num(i)} · ${esc(p.category)}</span>${p.status ? `<span class="st">${esc(p.status)}</span>` : ""}</div>
          <h1>${esc(p.title)}</h1><p>${esc(p.summary)}</p>
        </div>
        <div class="pl">
          <div class="pm">
            ${p.image ? `<img class="cover" src="${esc(p.image)}" alt="Illustration du projet ${esc(p.title)}" width="800" height="550">` : ""}
            ${p.facts.length ? sec("Ce que contient le projet", p.facts) : ""}
            ${(p.details || []).map(d => sec(d.t, d.items)).join("")}
            ${(p.shots || []).length ? `<h2>Captures</h2><div class="shots">${p.shots.map((s, k) => `<img src="${esc(s)}" alt="Capture ${k + 1} de ${esc(p.title)}" loading="lazy" width="640" height="400">`).join("")}</div>` : ""}
            ${!p.facts.length && !(p.details || []).length && !(p.shots || []).length ? `<p class="note">La fiche détaillée de ce projet sera complétée prochainement.</p>` : ""}
          </div>
          <aside class="aside"><h2>En bref</h2>
            <dl><dt>Catégorie</dt><dd>${esc(p.category)}</dd>${p.status ? `<dt>État</dt><dd>${esc(p.status)}</dd>` : ""}</dl>
            ${p.tech.length ? `<h3>Technologies</h3><ul class="al">${p.tech.map(t => `<li>${icon(t, true)}<span>${esc(t)}</span></li>`).join("")}</ul>` : ""}
            ${links}
          </aside>
        </div>
        <nav class="pn" aria-label="Autres projets">${nb(PROJECTS[i - 1], "← Précédent")}${nb(PROJECTS[i + 1], "Suivant →")}</nav>`;
    }
  }

  /* Carte de visite : texte, retournement, vCard */
  const bc = $("#bc");
  if (bc) {
    $$("[data-f]", bc).forEach(e => { const k = e.dataset.f; e.textContent = k === "name" ? SITE.name : (SITE[k] || ""); if (!e.textContent) e.hidden = true; });
    const front = $("#bcf"), back = $("#bcb"), fb = $("#flip");
    fb.addEventListener("click", () => {
      const on = bc.classList.toggle("flip");
      fb.setAttribute("aria-pressed", on); fb.textContent = on ? "Voir le recto" : "Retourner la carte";
      front.toggleAttribute("inert", on); front.setAttribute("aria-hidden", on);
      back.toggleAttribute("inert", !on); back.setAttribute("aria-hidden", !on);
    });
    $("#vcf").addEventListener("click", () => {
      const [fn, ...ln] = SITE.name.split(" ");
      const v = ["BEGIN:VCARD", "VERSION:3.0", `N:${ln.join(" ")};${fn};;;`, `FN:${SITE.name}`, SITE.phoneTel && `TEL;TYPE=CELL:${SITE.phoneTel}`, SITE.email && `EMAIL:${SITE.email}`, `URL:${SITE.github}`, "END:VCARD"].filter(Boolean).join("\r\n");
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([v], { type: "text/vcard;charset=utf-8" }));
      a.download = "Hyacinthe-Randrianarivelo.vcf"; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
  }

  /* Scroll reveal : apparition douce de bas en haut, puis nettoyage des classes */
  function reveal(root = document) {
    const els = $$(".reveal:not(.in)", root);
    const done = (el, ms) => setTimeout(() => { el.classList.remove("reveal", "in"); el.style.removeProperty("--d"); }, ms);
    if (!("IntersectionObserver" in window)) return els.forEach(e => e.classList.remove("reveal"));
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target; el.classList.add("in"); io.unobserve(el);
      done(el, 900 + (parseFloat(el.style.getPropertyValue("--d")) || 0) * 1000);
    }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((e, i) => {
      const p = e.parentElement;
      if (p.hasAttribute("data-stagger") || p.id === "grid") e.style.setProperty("--d", Math.min(i, 5) * .07 + "s");
      io.observe(e);
    });
  }
  reveal();
  const fit = () => {
    const s = $(".big span"); if (!s) return;
    const r = document.documentElement.classList; r.remove("nofont");
    if (s.scrollWidth > s.clientWidth + 1) r.add("nofont");
  };
  fit(); addEventListener("load", fit); addEventListener("resize", fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  const big = $(".big"); if (big) setTimeout(() => big.classList.add("in"), 80);

  /* Lien de menu actif */
  const links = $$("nav a[href^='#']");
  if (links.length) {
    const map = new Map(links.map(a => [$(a.getAttribute("href")), a]));
    const so = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a === map.get(e.target)));
    }), { rootMargin: "-45% 0px -50% 0px" });
    map.forEach((_, s) => s && so.observe(s));
  }
})();
