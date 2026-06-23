// Link helpers.
//
// `url()` prefixes a site-root path with Astro's configured base path so the
// site works both at the domain root (base "/") and under a GitHub Pages
// sub-path (base "/<repo>/"). Apply it to every internal href and to assets
// served from /public (Astro does not rewrite those automatically).
//
// `href()` maps the legacy prototype's flat `*.dc.html` targets onto the
// site's clean URLs; compose with `url()` when rendering, e.g. url(href(x)).

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

export function url(path) {
  if (!path) return path;
  // Leave externals, protocols and pure anchors untouched.
  if (/^(https?:|tel:|mailto:|#|data:|\/\/)/.test(path)) return path;
  if (path.startsWith('/')) return BASE + path;
  return path;
}

const PAGE_MAP = {
  'index.dc.html': '/',
  'services.dc.html': '/services/',
  'technology.dc.html': '/technology/',
  'case-studies.dc.html': '/case-studies/',
  'insights.dc.html': '/insights/',
  'videos.dc.html': '/videos/',
  'about.dc.html': '/about/',
  'contact.dc.html': '/contact/',
};

const SERVICE_SLUGS = [
  'relief-wells', 'plug-and-abandonment', 'ccus',
  'geothermal', 'solution-mining', 'well-re-entry',
];

export function href(target) {
  if (!target) return target;
  if (/^(https?:|tel:|mailto:|#)/.test(target)) return target;

  const [path, hash] = target.split('#');
  const suffix = hash ? '#' + hash : '';

  if (PAGE_MAP[path]) return PAGE_MAP[path] + suffix;

  const bare = path.replace(/\.dc\.html$/, '');
  if (path.startsWith('insights-')) {
    return '/insights/' + bare.replace(/^insights-/, '') + '/' + suffix;
  }
  if (SERVICE_SLUGS.includes(bare)) {
    return '/services/' + bare + '/' + suffix;
  }
  return '/' + bare + '/' + suffix;
}
