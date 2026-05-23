/**
 * PIET Exam Portal – Dashboard Script
 */

(function () {
  'use strict';

  /* ── Sidebar search filter ── */
  const searchInput = document.getElementById('sb-search-input');
  const navItems    = document.querySelectorAll('.sb-nav .sb-item');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const q = this.value.trim().toLowerCase();
      navItems.forEach(function (item) {
        const txt = item.textContent.toLowerCase();
        item.style.display = (!q || txt.includes(q)) ? 'flex' : 'none';
      });
    });
  }

  /* ── Prevent # links from jumping ── */
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

})();
