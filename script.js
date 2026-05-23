/**
 * PIET Exam Portal – Login Page Script
 * Handles: password visibility toggle
 */

(function () {
  'use strict';

  const passwordInput = document.getElementById('password');
  const toggleBtn = document.getElementById('toggle-password');
  const eyeOpen = document.getElementById('eye-open');
  const eyeClosed = document.getElementById('eye-closed');

  if (!passwordInput || !toggleBtn) return;

  /**
   * Toggle password field between text and password types,
   * and swap the eye icon accordingly.
   */
  toggleBtn.addEventListener('click', function () {
    const isHidden = passwordInput.type === 'password';

    passwordInput.type = isHidden ? 'text' : 'password';

    // Swap icons
    eyeOpen.style.display = isHidden ? 'none' : 'block';
    eyeClosed.style.display = isHidden ? 'block' : 'none';

    // Keep accessible label in sync
    toggleBtn.setAttribute(
      'aria-label',
      isHidden ? 'Hide password' : 'Show password'
    );
  });

  /**
   * On login form submit, redirect to the dashboard page.
   * (Frontend-only demo — no real authentication.)
   */
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Navigate to dashboard
      window.location.href = 'dashboard.html';
    });
  }
})();
