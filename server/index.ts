export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    const url = new URL(request.url);

    // Handle API routes
    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        name: "Cloudflare",
      });
    }

    // Serve web component library
    if (url.pathname === "/webcomponents.js") {
      try {
        // Try to get from WEBCOMPONENTS binding first
        if (env.WEBCOMPONENTS && typeof env.WEBCOMPONENTS.get === "function") {
          const file = await env.WEBCOMPONENTS.get("webcomponents.es.js");
          if (file) {
            return new Response(file.body, {
              headers: {
                "Content-Type": "application/javascript",
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "public, max-age=31536000",
              },
            });
          }
        }

        // Fallback: return 404 if not found in binding
        return new Response("Web components not found", {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
      } catch (error) {
        console.error("Error serving web component library:", error);
      }
    }

    // Serve demo page
    if (url.pathname === "/demo.html") {
      const demoHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Components Demo</title>
</head>
<body>
    <h1>Web Components Demo</h1>
    <p>This page demonstrates the web components served by Cloudflare Workers.</p>
    
    <example-webcomponent></example-webcomponent>
    
    <script type="module" src="/webcomponents.js"></script>
</body>
</html>`;

      return new Response(demoHtml, {
        headers: {
          "Content-Type": "text/html",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
