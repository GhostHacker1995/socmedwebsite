/* =========================================================
   SocMed Global Uganda — shared site behaviour + chrome
   ========================================================= */
(function () {
    'use strict';

    /* ---- Injected header / footer (used by inner pages with placeholders) ---- */
    var HEADER = '' +
    '<div class="container"><nav class="nav" id="nav">' +
      '<a href="index.html" class="nav-logo"><img src="images/logo.svg" alt="SocMed Global Uganda"></a>' +
      '<div class="nav-bar"><ul class="nav-menu">' +
        '<li data-nav="home"><a href="index.html">Home</a></li>' +
        '<li class="has-drop" data-nav="about"><a href="about-us.html" aria-haspopup="true" aria-expanded="false">About Us <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>' +
          '<div class="nav-drop"><a href="about-us.html">Who We Are</a><a href="leadership.html">Our Leadership</a></div></li>' +
        '<li class="has-drop" data-nav="whatwedo"><a href="what-we-do.html" aria-haspopup="true" aria-expanded="false">What We Do <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>' +
          '<div class="nav-drop"><a href="apply.html">Social Medicine Education</a><a href="community-outreach.html">Community Outreach</a><a href="advocacy.html">Advocacy</a><a href="gender-womens-health.html">Gender &amp; Women\'s Health</a></div></li>' +
        '<li class="has-drop" data-nav="impact"><a href="impact.html" aria-haspopup="true" aria-expanded="false">Our Impact <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>' +
          '<div class="nav-drop"><a href="apply.html">The Social Medicine Course</a><a href="care-connect-amuru.html">CareConnect Amuru</a><a href="campaign-against-racism.html">Campaign Against Racism</a>' +
            '<div class="has-subdrop"><a href="#" aria-haspopup="true" aria-expanded="false">Subprogrammes <svg class="sub-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></a>' +
              '<div class="nav-subdrop"><a href="service-to-community.html">Service to Community</a><a href="advocacy.html">Debate &amp; Dialogue</a></div></div></div></li>' +
        '<li class="has-drop" data-nav="newsroom"><a href="news.html" aria-haspopup="true" aria-expanded="false">Newsroom <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>' +
          '<div class="nav-drop"><a href="news.html">Newsroom</a><a href="careers.html">Careers</a><a href="newsletters.html">Newsletters</a></div></li>' +
        '<li data-nav="contact"><a href="contact-us.html">Contact</a></li>' +
      '</ul>' +
      '<a href="donate.html" class="nav-cta"><span>Donate</span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21l-1.4-1.3C5.4 15 2 11.9 2 8.1 2 5.4 4.1 3.3 6.8 3.3c1.5 0 3 .7 4 1.9 1-1.2 2.5-1.9 4-1.9C21.9 3.3 24 5.4 24 8.1c0 3.8-3.4 6.9-8.6 11.6L12 21z"/></svg></a></div>' +
      '<button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>' +
    '</nav></div>';

    var FOOTER = '' +
    '<div class="container"><div class="footer-top">' +
      '<div class="footer-brand"><img src="images/logo.svg" alt="SocMed Global Uganda">' +
        '<p>We are a collective of like minded health professionals who live, practice, and accompany patients and communities through their illness journey across all corners of Uganda.</p>' +
        '<div class="footer-social">' +
          '<a href="https://www.facebook.com/share/1MBparZQs6/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>' +
          '<a href="https://x.com/socmedglobalug" target="_blank" rel="noopener" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>' +
          '<a href="https://www.instagram.com/socmedglobal" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>' +
          '<a href="https://www.linkedin.com/company/socmed-global-uganda" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg></a>' +
          '<a href="https://www.youtube.com/@SocMedGlobalUgandaLtd" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 6.2a2.8 2.8 0 0 0-2-2C18.7 3.7 12 3.7 12 3.7s-6.7 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.8 2.8 2.8 0 0 0 2 2c1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.8zM10 15.5v-7l6 3.5z"/></svg></a>' +
        '</div></div>' +
      '<div class="footer-col"><h5>Work With Us</h5><ul>' +
        '<li><a href="about-us.html">About Us</a></li><li><a href="what-we-do.html">Our Programs</a></li><li><a href="impact.html">Our Impact</a></li><li><a href="leadership.html">Our Leadership</a></li><li><a href="careers.html">Careers</a></li></ul></div>' +
      '<div class="footer-col"><h5>Associated Links</h5><ul>' +
        '<li><a href="https://equalhealth.org" target="_blank" rel="noopener">EqualHealth</a></li><li><a href="https://www.merck-family-foundation.com/" target="_blank" rel="noopener">Merck Family Foundation</a></li><li><a href="https://amuruvht.com" target="_blank" rel="noopener">Amuru VHTs Association</a></li></ul></div>' +
      '<div class="footer-col footer-contact"><h5>Contact Us</h5>' +
        '<div class="cline"><span class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span><span>Kampala, Uganda</span></div>' +
        '<div class="cline"><span class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg></span><a href="mailto:info@socmedglobalug.org">info@socmedglobalug.org</a></div>' +
        '<div class="cline"><span class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span><span>+256 766 533 434<br>+256 741 049 377</span></div>' +
      '</div></div>' +
      '<div class="footer-divider"></div>' +
      '<div class="footer-cta"><h2>Get In Touch</h2><form class="subscribe" onsubmit="return false;"><input type="email" placeholder="Email address" aria-label="Email address"><button type="submit">Submit</button></form></div>' +
    '</div>' +
    '<div class="footer-bottom"><div class="container">&copy; 2026 SocMed Global Uganda. All rights reserved. &nbsp;|&nbsp; Powered by <a href="https://www.grayhost.dev" target="_blank" rel="noopener">Grayhost Innovations</a>.</div></div>';

    var headerEl = document.getElementById('site-header');
    if (headerEl) {
        headerEl.className = 'site-header';
        headerEl.innerHTML = HEADER;
        var active = document.body.getAttribute('data-active');
        if (active) {
            var li = headerEl.querySelector('.nav-menu > li[data-nav="' + active + '"]');
            if (li) li.classList.add('active');
        }
    }
    var footerEl = document.getElementById('site-footer');
    if (footerEl) {
        footerEl.className = 'footer';
        footerEl.innerHTML = FOOTER;
    }

    /* ---- Expose header height for the fixed mobile drawer ---- */
    function setHeaderH() {
        var h = document.querySelector('.site-header');
        if (h) document.documentElement.style.setProperty('--header-h', h.offsetHeight + 'px');
    }
    setHeaderH();
    window.addEventListener('resize', setHeaderH);
    window.addEventListener('load', setHeaderH);

    /* ---- Add "Get Involved" as a drawer item (mobile only, via CSS) ---- */
    var navMenu = document.querySelector('.nav-menu');
    if (navMenu && !navMenu.querySelector('.nav-mobile-cta')) {
        var cta = document.createElement('li');
        cta.className = 'nav-mobile-cta';
        cta.innerHTML = '<a href="donate.html">Donate</a>';
        navMenu.appendChild(cta);
    }

    /* ---- Mobile nav + nested accordions ---- */
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('navToggle');
    var mq = window.matchMedia('(max-width:860px)');

    function closeNav() {
        if (!nav) return;
        nav.classList.remove('open');
        document.body.classList.remove('nav-locked');
        nav.querySelectorAll('.open').forEach(function (el) { el.classList.remove('open'); });
    }
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            document.body.classList.toggle('nav-locked', open);
            if (!open) nav.querySelectorAll('.open').forEach(function (el) { el.classList.remove('open'); });
        });
    }
    document.querySelectorAll('.has-drop > a, .has-subdrop > a').forEach(function (a) {
        a.addEventListener('click', function (e) {
            if (mq.matches) {
                e.preventDefault();
                var li = a.parentElement;
                var open = li.classList.toggle('open');
                a.setAttribute('aria-expanded', open ? 'true' : 'false');
            }
        });
    });
    document.querySelectorAll('.nav-menu a').forEach(function (a) {
        a.addEventListener('click', function () {
            var li = a.parentElement;
            var isParent = li.classList.contains('has-drop') || li.classList.contains('has-subdrop');
            if (mq.matches && !isParent) closeNav();
        });
    });
    mq.addEventListener('change', function (e) { if (!e.matches) closeNav(); });

    /* ---- Hero slider ---- */
    (function () {
        var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
        var dots = Array.prototype.slice.call(document.querySelectorAll('#heroDots button'));
        if (slides.length < 2) return;
        var idx = 0, timer;
        function go(i) {
            slides[idx].classList.remove('is-active');
            if (dots[idx]) dots[idx].classList.remove('is-active');
            idx = (i + slides.length) % slides.length;
            slides[idx].classList.add('is-active');
            if (dots[idx]) dots[idx].classList.add('is-active');
        }
        function start() { timer = setInterval(function () { go(idx + 1); }, 6500); }
        function reset() { clearInterval(timer); start(); }
        dots.forEach(function (d, i) { d.addEventListener('click', function () { go(i); reset(); }); });
        var prev = document.getElementById('heroPrev'), next = document.getElementById('heroNext');
        if (prev) prev.addEventListener('click', function () { go(idx - 1); reset(); });
        if (next) next.addEventListener('click', function () { go(idx + 1); reset(); });
        var hero = document.getElementById('hero');
        if (hero) {
            hero.addEventListener('mouseenter', function () { clearInterval(timer); });
            hero.addEventListener('mouseleave', start);
        }
        start();
    })();

    /* ---- FAQ accordion ---- */
    document.querySelectorAll('.faq-item .faq-q').forEach(function (q) {
        q.addEventListener('click', function () {
            var item = q.parentElement;
            var ans = item.querySelector('.faq-a');
            var isOpen = item.classList.contains('open');
            item.parentElement.querySelectorAll('.faq-item.open').forEach(function (o) {
                o.classList.remove('open');
                var a = o.querySelector('.faq-a'); if (a) a.style.maxHeight = null;
            });
            if (!isOpen) { item.classList.add('open'); if (ans) ans.style.maxHeight = ans.scrollHeight + 'px'; }
        });
    });

    /* ---- Contact form chips ---- */
    document.querySelectorAll('.chip-row').forEach(function (row) {
        var hidden = row.parentElement.querySelector('input[type="hidden"]');
        row.querySelectorAll('.chip').forEach(function (chip) {
            chip.addEventListener('click', function () {
                row.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
                chip.classList.add('active');
                if (hidden) hidden.value = chip.textContent.trim();
            });
        });
    });

    /* ---- Current year ---- */
    var yr = document.getElementById('yr');
    if (yr) yr.textContent = new Date().getFullYear();

    /* ---- Scroll reveal (respects reduced-motion) ---- */
    (function () {
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (reduce.matches || !('IntersectionObserver' in window)) return;

        var blockSel = '.sec-head,.about-feature,.whoweare,.prose,.join-inner,.contact-form,.contact-info,.faq-intro,.marquee,.about-center,.donate-card,.about-meta,.hero-card';
        var groupSel = '.services-grid,.icon-cards,.mini-stats,.vms-grid,.impact-grid,.network-grid,.team-grid,.proj-grid,.leader-grid,.pl-grid,.quote-cards,.feature-banners,.features,.af-checks,.faq-list,.job-list,.process';

        var targets = [];
        document.querySelectorAll(blockSel).forEach(function (el) {
            el.classList.add('reveal');
            targets.push(el);
        });
        document.querySelectorAll(groupSel).forEach(function (grid) {
            var kids = grid.children;
            for (var i = 0; i < kids.length; i++) {
                kids[i].classList.add('reveal');
                kids[i].style.setProperty('--ri', Math.min(i, 7));
                targets.push(kids[i]);
            }
        });

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('is-visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

        targets.forEach(function (el) { io.observe(el); });
    })();
})();
