// Resolve a public/ asset path against Vite's base URL, so absolute paths
// like "/logo.png" keep working when the site is served from a subpath
// (e.g. GitHub Pages project sites at usuario.github.io/repo/).
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
