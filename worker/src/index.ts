interface Env {
  VISITS: KVNamespace;
  ALLOWED_ORIGINS: string;
}

const KEY = 'count';

const json = (body: unknown, status: number, headers: HeadersInit = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store', ...headers },
  });

async function readCount(env: Env): Promise<number> {
  return Number((await env.VISITS.get(KEY)) ?? 0);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin') ?? '';
    const allowed = env.ALLOWED_ORIGINS.split(',').map((o) => o.trim());
    const cors: Record<string, string> = allowed.includes(origin)
      ? { 'access-control-allow-origin': origin, vary: 'Origin' }
      : {};

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: { ...cors, 'access-control-allow-methods': 'GET, POST', 'access-control-max-age': '86400' },
      });
    }

    const { pathname } = new URL(request.url);

    if (request.method === 'GET' && pathname === '/count') {
      return json({ count: await readCount(env) }, 200, cors);
    }

    if (request.method === 'POST' && pathname === '/hit') {
      if (!cors['access-control-allow-origin']) return json({ error: 'forbidden' }, 403);
      // KV has no atomic increment, so two simultaneous visits can collide.
      // That is acceptable for a hobby counter.
      const count = (await readCount(env)) + 1;
      await env.VISITS.put(KEY, String(count));
      return json({ count }, 200, cors);
    }

    return json({ error: 'not found' }, 404, cors);
  },
};
