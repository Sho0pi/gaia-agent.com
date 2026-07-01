// Serves /install.sh so `curl -fsSL https://gaia-agent.com/install.sh | bash` works.
//
// The script is not vendored here - it is fetched from the gaia repo at BUILD TIME,
// so every deploy re-pulls the current installer and the site never drifts from source.
// If the fetch fails the build fails loudly, which is what we want (better a red deploy
// than serving a stale or empty installer).

export const prerender = true;

const SOURCE =
  'https://raw.githubusercontent.com/Sho0pi/gaia/master/scripts/install.sh';

export async function GET() {
  const res = await fetch(SOURCE);
  if (!res.ok) {
    throw new Error(`Failed to fetch install.sh from ${SOURCE}: ${res.status} ${res.statusText}`);
  }
  const script = await res.text();
  return new Response(script, {
    headers: {
      'content-type': 'text/x-shellscript; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}
