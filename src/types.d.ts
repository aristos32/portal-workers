declare namespace Cloudflare {
  interface Env {
    WEBCOMPONENTS: Fetcher;
  }
}

interface Env extends Cloudflare.Env {}
