// Feasibility-request form handling.
//
// To send submissions to a real backend, set an endpoint — either here, or
// per-form via a `data-endpoint="..."` attribute. Works with Formspree,
// Netlify Forms, Basin, or any URL that accepts a POST.
// With no endpoint configured, the form falls back to composing an email to
// info@gunnarenergyservices.com so it is never a dead end before launch.
const DEFAULT_ENDPOINT = '';

document.querySelectorAll('form[data-feasibility]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const fields = Object.fromEntries(data.entries());
    const status = form.querySelector('[data-form-status]');
    const endpoint = form.getAttribute('data-endpoint') || DEFAULT_ENDPOINT;

    const done = () => {
      if (status) {
        status.textContent = "Thanks — your request is on its way. We'll be in touch shortly.";
        status.style.color = '#feee00';
      }
      form.reset();
    };

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        });
        if (res.ok) return done();
      } catch (_) { /* fall through to mailto */ }
    }

    const subject = encodeURIComponent('Feasibility review request — ' + (fields.name || 'Website enquiry'));
    const body = encodeURIComponent(
      Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n')
    );
    window.location.href = `mailto:info@gunnarenergyservices.com?subject=${subject}&body=${body}`;
    done();
  });
});
