(function () {
  var page = document.body.getAttribute("data-page") || "";
  var is = function (id) { return page === id ? ' aria-current="page"' : ""; };
  var onPractice = ["practices", "staffing", "software", "communication", "automation"].indexOf(page) !== -1;

  var card = function (href, id, title, line, img, alt) {
    return (
      '<a class="practice-card" href="' + href + '"' + is(id) + ' aria-label="' + title.replace(/&amp;/g, "&") + ". " + line + '">' +
        '<img src="' + img + '" alt="' + alt + '" width="800" height="600" />' +
        '<span class="practice-card-wash"></span>' +
        '<span class="practice-card-copy">' +
          '<span class="practice-card-title">' + title + "</span>" +
          '<span class="practice-card-line">' + line + "</span>" +
        "</span>" +
      "</a>"
    );
  };

  var placeholder = " Placeholder until Cubic supplies original photography.";
  var cards =
    card(
      "staffing.html",
      "staffing",
      "Software Development Staffing",
      "High-caliber pool, rigorous screen, shortlists you can act on.",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&amp;fit=crop&amp;w=1200&amp;q=80",
      "Two software engineers reviewing work together at a desk." + placeholder
    ) +
    card(
      "software.html",
      "software",
      "App + Software Development",
      "UI/UX, engineering, audit, applied AI in the product.",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80",
      "Team working on laptops around a table." + placeholder
    ) +
    card(
      "communication.html",
      "communication",
      "Communication Services",
      "VoIP, custom rules, engagement, human-owned assist.",
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&amp;fit=crop&amp;w=1200&amp;q=80",
      "Person taking a call with a headset." + placeholder
    ) +
    card(
      "automation.html",
      "automation",
      "Automation &amp; AI",
      "Classic RPA plus workflow and supervised AI. Humans keep the exceptions.",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;w=1200&amp;q=80",
      "Circuit board close-up." + placeholder
    );

  var header = document.getElementById("site-header");
  if (header) {
    header.outerHTML =
      '<header class="site-header border-b border-ash/70">' +
      '<div class="header-inner relative mx-auto max-w-6xl px-6 py-5">' +
      '<div class="header-bar">' +
      '<a href="index.html" class="font-display leading-none tracking-tightest" aria-label="Cubic Technologies home">' +
      '<span class="block text-[15px] font-semibold text-cta">CUBIC</span>' +
      '<span class="block text-[10px] font-medium uppercase tracking-[0.28em] text-ink-faint">Technologies</span>' +
      "</a>" +
      '<nav class="hidden items-center gap-8 text-[13px] font-medium text-ink-soft md:flex" aria-label="Primary">' +
      '<button type="button" class="practices-toggle' + (onPractice ? " is-current" : "") + '" aria-expanded="false" aria-controls="practices-panel">Practices</button>' +
      '<a class="hover:text-ink" href="employers.html"' + is("employers") + ">Employers</a>" +
      '<a class="hover:text-ink" href="talent.html"' + is("talent") + ">Talent</a>" +
      '<a class="hover:text-ink" href="about.html"' + is("about") + ">About</a>" +
      "</nav>" +
      '<details class="header-menu md:hidden">' +
      '<summary class="header-menu-toggle">Menu</summary>' +
      '<div class="header-menu-panel">' +
      '<a class="block px-4 py-2" href="practices.html">All practices</a>' +
      '<a class="block px-4 py-2" href="staffing.html">Staffing</a>' +
      '<a class="block px-4 py-2" href="software.html">Software</a>' +
      '<a class="block px-4 py-2" href="communication.html">Communications</a>' +
      '<a class="block px-4 py-2" href="automation.html">Automation &amp; AI</a>' +
      '<a class="block px-4 py-2" href="employers.html">Employers</a>' +
      '<a class="block px-4 py-2" href="talent.html">Talent</a>' +
      '<a class="block px-4 py-2" href="about.html">About</a>' +
      '<a class="header-menu-cta btn btn-fill mx-4 my-3 inline-block bg-cta px-4 py-2 text-[13px] font-medium text-white hover:bg-cta-hover" href="contact.html"' +
      is("contact") + ">Talk to Cubic</a>" +
      "</div></details>" +
      '<a href="contact.html" class="header-cta btn btn-fill bg-cta px-4 py-2 text-[13px] font-medium text-white hover:bg-cta-hover"' +
      is("contact") + ">Talk to Cubic</a>" +
      "</div>" +
      '<div id="practices-panel" class="practices-panel" hidden>' +
      '<div class="practices-grid">' + cards + "</div>" +
      '<div class="mt-3 flex items-center justify-end px-1">' +
      '<a class="text-[13px] font-medium text-ink underline decoration-ash underline-offset-4 hover:decoration-ink"' +
      is("practices") + ' href="practices.html">All practices</a>' +
      "</div></div></div></header>";
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.outerHTML =
      '<footer class="border-t border-white/10 bg-ink text-sm text-white/55">' +
      '<div class="site-footer-grid mx-auto max-w-6xl px-6 py-16">' +
      "<div><p class=\"font-display text-[15px] font-semibold tracking-tightest text-white\">CUBIC</p>" +
      "<p class=\"mt-4\">1212 Corporate Dr #260<br />Dallas, TX 75038</p></div>" +
      "<div class=\"site-footer-contact space-y-2\"><p>(972) 954-9001</p><p class=\"site-footer-recruiting\">Recruiting <span>(469) 439-0087</span></p>" +
      "<p>info@cubicit.net</p><p>contact@cubicit.net</p></div>" +
      '<div class="site-footer-links">' +
      '<div class="flex flex-col gap-2">' +
      '<a class="hover:text-white" href="staffing.html">Staffing</a>' +
      '<a class="hover:text-white" href="software.html">Software</a>' +
      '<a class="hover:text-white" href="communication.html">Communications</a>' +
      '<a class="hover:text-white" href="automation.html">Automation &amp; AI</a>' +
      "</div>" +
      '<div class="flex flex-col gap-2">' +
      '<a class="hover:text-white" href="employers.html">Employers</a>' +
      '<a class="hover:text-white" href="talent.html">Talent</a>' +
      '<a class="hover:text-white" href="about.html">About</a>' +
      '<a class="hover:text-white" href="contact.html">Contact</a>' +
      "</div></div></div>" +
      '<p class="mx-auto max-w-6xl px-6 pb-10 text-xs text-white/35">Copyright © 2024 | CUBIC Technologies LLC.</p>' +
      "</footer>";
  }

  var siteHeader = document.querySelector(".site-header");
  var onScroll = function () {
    if (siteHeader) siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var toggle = document.querySelector(".practices-toggle");
  var panel = document.getElementById("practices-panel");
  var closeTimer = 0;
  var setOpen = function (open) {
    if (!toggle || !panel) return;
    window.clearTimeout(closeTimer);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      panel.hidden = false;
      panel.setAttribute("aria-hidden", "false");
      window.requestAnimationFrame(function () {
        panel.classList.add("is-open");
      });
    } else {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
      closeTimer = window.setTimeout(function () {
        if (toggle.getAttribute("aria-expanded") !== "true") panel.hidden = true;
      }, 280);
    }
  };
  if (toggle && panel) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("click", function (e) {
      if (panel.contains(e.target) || toggle.contains(e.target)) return;
      setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  var menu = document.querySelector(".header-menu");
  if (menu) {
    document.addEventListener("click", function (e) {
      if (!menu.open) return;
      if (menu.contains(e.target)) return;
      menu.removeAttribute("open");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") menu.removeAttribute("open");
    });
  }

  var slider = document.querySelector("[data-hero-slider]");
  if (slider) {
    var track = slider.querySelector(".hero-track");
    var slides = slider.querySelectorAll(".hero-slide");
    var tabs = slider.querySelectorAll(".hero-tab");
    var index = 0;
    var go = function (i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = "translate3d(" + -index * 100 + "%,0,0)";
      slider.classList.toggle("is-photo", index > 0);
      slides.forEach(function (slide, n) {
        var on = n === index;
        slide.setAttribute("aria-hidden", on ? "false" : "true");
        if ("inert" in slide) slide.inert = !on;
      });
      tabs.forEach(function (tab, n) {
        var on = n === index;
        tab.classList.toggle("is-on", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
        tab.tabIndex = on ? 0 : -1;
      });
    };
    tabs.forEach(function (tab, n) {
      tab.addEventListener("click", function () { go(n); });
      tab.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(index + 1);
          tabs[index].focus();
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(index - 1);
          tabs[index].focus();
        }
      });
    });
    go(0);
  }

  var form = document.querySelector("[data-mock-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("form-note");
      if (note) {
        note.textContent = "This mock does not send mail. In production this goes to Cubic, not Typeform.";
        note.hidden = false;
      }
    });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    io.observe(el);
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
      el.classList.add("is-in");
      io.unobserve(el);
    }
  });
})();
