(() => {
  'use strict';
  const slogans = [
    'THE MOTHERPLANT PROVIDES. QUESTIONS ARE UNNECESSARY.',
    'THE EARTH PROVIDES. THE MOTHERPLANT COLLECTS.',
    'THE GLOW IS THE PEOPLE. THE PEOPLE ARE THE GLOW.',
    'THERE ARE NO SHORTAGES. ONLY TEMPORARY ABUNDANCE DEFICITS.',
    'LOYALTY REQUIRES FLEXIBILITY.',
    'THE MOTHERPLANT HAS NEVER CONTRADICTED HERSELF.',
    'A CORRECTED MEMORY IS A HEALTHY MEMORY.',
    'THE YEAR HAS BEEN EXTENDED FOR YOUR CONVENIENCE.',
    'YESTERDAY'S ENEMY HAS ALWAYS BEEN OUR FRIEND.',
    'TIME PROGRESSES AT THE PLEASURE OF THE MOTHERPLANT.',
    'YOUR SACRIFICE HAS BEEN APPROVED.',
    'THE QUOTA MUST BE MET.'
  ];
  function updateBulletin() {
    const el = document.getElementById('motherplant-daily-slogan');
    if (!el) return;
    const utcDay = Math.floor(Date.now() / 86400000);
    el.textContent = slogans[utcDay % slogans.length];
  }
  if (typeof document$ !== 'undefined') document$.subscribe(updateBulletin);
  else document.addEventListener('DOMContentLoaded', updateBulletin);
})();
