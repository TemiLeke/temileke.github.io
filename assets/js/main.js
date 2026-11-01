(function () {
  "use strict";
  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var redrawers = [];
  root.classList.add("js");

  function css(name) { return getComputedStyle(root).getPropertyValue(name).trim(); }

  // ---------- Theme toggle ----------
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) toggle.addEventListener("click", function () {
    var next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = css("--bg");
    redrawers.forEach(function (fn) { fn(); });
  });

  // ---------- Header border on scroll ----------
  var header = document.querySelector(".site-header");
  function onScroll() { header && header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Reveal sections on scroll ----------
  var revealables = document.querySelectorAll(".section, .research-item, .paper, .page-head");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    revealables.forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("reveal"); io.observe(el); }
    });
  }

  // ---------- Card spotlight ----------
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  function setupCanvas(canvas) {
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: w, h: h };
  }

  function onResize(fn) {
    var t, lastW = window.innerWidth;
    window.addEventListener("resize", function () {
      // ignore mobile URL-bar height changes
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      clearTimeout(t); t = setTimeout(fn, 150);
    });
  }

  // ---------- Hero: drifting gene network ----------
  var netCanvas = document.querySelector(".hero-net");
  if (netCanvas) (function () {
    var c, nodes = [], pulses = [], running = false, visible = true, raf;
    var pointer = { x: -1e4, y: -1e4 };
    var LINK = 150;
    var colors = {};

    function readColors() { colors = { line: css("--line-strong"), node: css("--faint"), accent: css("--accent"), accent2: css("--accent-2") }; }

    function init() {
      c = setupCanvas(netCanvas);
      readColors();
      var n = Math.max(28, Math.min(95, Math.round((c.w * c.h) / 9000)));
      nodes = [];
      for (var i = 0; i < n; i++) {
        var hub = Math.random() < 0.12;
        nodes.push({
          x: Math.random() * c.w, y: Math.random() * c.h,
          vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
          r: hub ? 2.6 + Math.random() * 1.6 : 1.1 + Math.random() * 0.9, hub: hub
        });
      }
      pulses = [];
      draw();
    }

    function step() {
      for (var i = 0; i < nodes.length; i++) {
        var p = nodes[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = c.w + 20; else if (p.x > c.w + 20) p.x = -20;
        if (p.y < -20) p.y = c.h + 20; else if (p.y > c.h + 20) p.y = -20;
        var dx = p.x - pointer.x, dy = p.y - pointer.y, d2 = dx * dx + dy * dy;
        if (d2 < 14400) { var f = (1 - Math.sqrt(d2) / 120) * 0.6; p.x += dx / 120 * f; p.y += dy / 120 * f; }
      }
      // signal pulses travel from hubs along their links
      if (pulses.length < 10 && Math.random() < 0.06) {
        var hubs = nodes.filter(function (n) { return n.hub; });
        var a = hubs[(Math.random() * hubs.length) | 0];
        if (a) {
          var near = nodes.filter(function (b) { return b !== a && Math.hypot(a.x - b.x, a.y - b.y) < LINK; });
          if (near.length) pulses.push({ a: a, b: near[(Math.random() * near.length) | 0], t: 0 });
        }
      }
      for (var k = pulses.length - 1; k >= 0; k--) {
        pulses[k].t += 0.018;
        if (pulses[k].t >= 1 || Math.hypot(pulses[k].a.x - pulses[k].b.x, pulses[k].a.y - pulses[k].b.y) > LINK) pulses.splice(k, 1);
      }
    }

    function draw() {
      var ctx = c.ctx;
      ctx.clearRect(0, 0, c.w, c.h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.line;
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y;
          if (dx > LINK || dx < -LINK || dy > LINK || dy < -LINK) continue;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.globalAlpha = (1 - d / LINK) * ((a.hub || b.hub) ? 0.9 : 0.55);
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      for (var m = 0; m < nodes.length; m++) {
        var n = nodes[m];
        ctx.fillStyle = n.hub ? colors.accent : colors.node;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.2832); ctx.fill();
        if (n.hub) {
          ctx.globalAlpha = 0.15; ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 3.2, 0, 6.2832); ctx.fill(); ctx.globalAlpha = 1;
        }
      }
      ctx.fillStyle = colors.accent2;
      pulses.forEach(function (p) {
        var x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.globalAlpha = Math.sin(p.t * Math.PI);
        ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 6.2832); ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function loop() {
      if (!running) return;
      step(); draw();
      raf = requestAnimationFrame(loop);
    }
    function update() {
      var should = visible && !document.hidden && !reduceMotion;
      if (should && !running) { running = true; raf = requestAnimationFrame(loop); }
      else if (!should && running) { running = false; cancelAnimationFrame(raf); }
    }

    var hero = netCanvas.parentElement;
    hero.addEventListener("pointermove", function (e) {
      var r = netCanvas.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top;
    });
    hero.addEventListener("pointerleave", function () { pointer.x = pointer.y = -1e4; });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; update(); }).observe(hero);
    document.addEventListener("visibilitychange", update);
    redrawers.push(function () { readColors(); draw(); });
    onResize(init);
    init(); update();
  })();

  // ---------- Hero: Manhattan plot strip ----------
  var manCanvas = document.querySelector(".manhattan canvas");
  if (manCanvas) (function () {
    // Deterministic pseudo-random so the plot looks the same on every visit
    function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
    var sizes = [248, 242, 198, 190, 181, 171, 159, 145, 138, 134, 135, 133, 114, 107, 102, 90, 83, 80, 59, 64, 47, 51];
    var peaks = { 1: 0.4, 5: 0.62, 10: 0.3, 18: 0.55 }; // chromosome index -> peak position
    var points = [], c, start = null;

    function build() {
      var rand = rng(20251101), total = sizes.reduce(function (a, b) { return a + b; }, 0);
      var gap = 0.004, usable = 1 - gap * (sizes.length - 1), x0 = 0;
      points = [];
      sizes.forEach(function (s, ci) {
        var span = (s / total) * usable, n = Math.round(s * 0.42);
        for (var i = 0; i < n; i++) {
          var u = rand(), y = -Math.log(1 - rand() * 0.999) * 0.11; // mostly near baseline
          if (peaks[ci] !== undefined) {
            var d = (u - peaks[ci]) / 0.05;
            y += Math.exp(-d * d) * (0.55 + rand() * 0.45);
          }
          points.push({ x: x0 + u * span, y: Math.min(y, 1), chr: ci });
        }
        x0 += span + gap;
      });
    }

    function draw(progress) {
      var ctx = c.ctx, pad = Math.max(16, Math.min(40, c.w * 0.04)), w = c.w - pad * 2, h = c.h - 14;
      var a1 = css("--accent"), a2 = css("--accent-2"), line = css("--faint");
      ctx.clearRect(0, 0, c.w, c.h);
      var thr = h - 0.62 * (h - 8);
      ctx.strokeStyle = line; ctx.globalAlpha = 0.6; ctx.setLineDash([3, 4]); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(pad, thr); ctx.lineTo(c.w - pad, thr); ctx.stroke(); ctx.setLineDash([]);
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        var local = Math.max(0, Math.min(1, progress * 1.6 - p.x * 0.6));
        var e = 1 - Math.pow(1 - local, 3);
        var x = pad + p.x * w, y = h - p.y * (h - 8) * e;
        var sig = y < thr;
        ctx.globalAlpha = sig ? 1 : 0.45;
        ctx.fillStyle = sig ? a1 : (p.chr % 2 ? a2 : line);
        ctx.beginPath(); ctx.arc(x, y, sig ? 1.9 : 1.3, 0, 6.2832); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function frame(ts) {
      if (start === null) start = ts;
      var t = Math.min(1, (ts - start) / 1800);
      draw(t);
      if (t < 1) requestAnimationFrame(frame);
    }

    function init() { c = setupCanvas(manCanvas); draw(1); }
    build();
    c = setupCanvas(manCanvas);
    if (reduceMotion) draw(1); else requestAnimationFrame(frame);
    redrawers.push(function () { draw(1); });
    onResize(init);
  })();
})();
