(() => {
  if (location.hostname !== 'ozepon.github.io' || !location.pathname.startsWith('/gyogyotaro/')) return;
  const measurementId = 'G-0N8HEJFHBN';
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', measurementId, {
    page_location: location.origin + location.pathname,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_path: '/gyogyotaro/'
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(script);
  document.addEventListener('click', event => {
    const target = event.target.closest('button,a');
    if (!target) return;
    if (target.id === 'exportDownload') gtag('event', 'png_download');
    if (target.dataset.uiMode) gtag('event', 'mode_change', { ui_mode: target.dataset.uiMode });
  });
  document.addEventListener('change', event => {
    if (['pose', 'simplePose'].includes(event.target.id)) {
      gtag('event', 'pose_change', { pose: event.target.value });
    }
  });
})();
