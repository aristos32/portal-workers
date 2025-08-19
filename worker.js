import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Middleware: handle API routes
    if (url.pathname.startsWith("/api")) {
      return handleApi(request, env);
    }

    // Serve Vue static assets
    try {
      return await getAssetFromKV(
        { request, waitUntil: ctx.waitUntil.bind(ctx) },
        { ASSET_NAMESPACE: env.__STATIC_CONTENT }
      );
    } catch (err) {
      // SPA fallback to index.html
      return await getAssetFromKV(
        { request: new Request(`${url.origin}/index.html`, request) },
        { ASSET_NAMESPACE: env.__STATIC_CONTENT }
      );
    }
  },
};

// Example API
async function handleApi(request, env) {
  return new Response(JSON.stringify({ message: "Hello from Worker!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
