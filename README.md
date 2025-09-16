# Portal Workers - Web Components Library

A Vue-based web component library served through Cloudflare Workers, allowing you to share reusable components across different websites.

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm
- Cloudflare account (for deployment)

### Installation

```bash
npm install
```

## 📁 Project Structure

```
portal-workers/
├── src/
│   ├── @webcomponents/          # Your web components
│   │   ├── Example.vue         # Example component
│   │   └── index.ts            # Component registry
│   └── components/             # Regular Vue components
├── server/
│   └── index.ts                # Cloudflare Worker
├── dist-webcomponent/          # Built web components
└── test-webcomponents.html     # Local test file
```

## 🛠️ Development Workflow

### 1. Local Development & Testing

**Option A: Simple HTTP Server (Recommended)**

```bash
# Build web components
npm run build:webcomponent

# Start local server
python3 -m http.server 8080

# Test your components
Open: http://localhost:8080/test-webcomponents.html
```

**Option B: Wrangler Dev (Advanced)**

```bash
# Start Cloudflare Workers dev server
npm run preview

Test at: http://localhost:8787/demo.html
# Note: May have asset binding issues in dev mode
```

### 2. Adding New Web Components

1. **Create component** in `src/@webcomponents/MyComponent.vue`:

```vue
<template>
  <div class="my-component">
    <h3>{{ title }}</h3>
    <button @click="increment">{{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const title = ref("My Component");
const count = ref(0);

const increment = () => {
  count.value++;
};
</script>
```

2. **Register component** in `src/@webcomponents/index.ts`:

```typescript
import { defineCustomElement } from "vue";
import Example from "./Example.vue";
import MyComponent from "./MyComponent.vue"; // Add this

// Register components
customElements.define("example-webcomponent", defineCustomElement(Example));
customElements.define("my-webcomponent", defineCustomElement(MyComponent)); // Add this

export { defineCustomElement };
export * from "vue";
```

3. **Build and test**:

```bash
npm run build:webcomponent
# Refresh your test page
```

### 3. Production Deployment

```bash
# Build everything and deploy
npm run deploy

# Your web components are now live at:
# https://portal-workers.aristos-aresti.workers.dev/webcomponents.js
```

## 🌐 Using Your Web Components

### In Any Website

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
  </head>
  <body>
    <h1>My Website</h1>

    <!-- Use your web components -->
    <example-webcomponent></example-webcomponent>
    <my-webcomponent></my-webcomponent>

    <!-- Include the library -->
    <script
      type="module"
      src="https://portal-workers.aristos-aresti.workers.dev/webcomponents.es.js"
    ></script>
  </body>
</html>
```

### Available Endpoints

- **Web Component Library**: `/webcomponents.js`
- **Demo Page**: `/demo.html`
- **API**: `/api/`

## 📝 Available Scripts

| Command                      | Description                        |
| ---------------------------- | ---------------------------------- |
| `npm run dev`                | Start Vite dev server for main app |
| `npm run build:webcomponent` | Build web components only          |
| `npm run build:all`          | Build everything                   |
| `npm run preview`            | Start Wrangler dev server          |
| `npm run deploy`             | Deploy to Cloudflare Workers       |

## 🔧 Configuration Files

- `vite.config.webcomponent.ts` - Web component build config
- `wrangler.jsonc` - Cloudflare Workers config
- `server/index.ts` - Worker logic for serving components

## 🐛 Troubleshooting

### Wrangler Dev Issues

If you see errors with Wrangler dev server:

```bash
# Clear Wrangler cache
rm -rf ~/.config/.wrangler/registry/portal-workers

# Use Python server instead
python3 -m http.server 8080
```

### Web Components Not Loading

1. Check browser console for errors
2. Ensure you're using `type="module"` in script tag
3. Verify the component is registered in `index.ts`

## 🎯 Development Tips

1. **Always test locally** with Python server before deploying
2. **Use browser dev tools** to debug web components
3. **Check the built files** in `dist-webcomponent/` to verify output
4. **Test in multiple browsers** to ensure compatibility

## 📚 Next Steps

- Add more web components to `src/@webcomponents/`
- Customize styling and behavior
- Add TypeScript definitions for better IDE support
- Set up automated testing

---

**Your web components are now globally available!** 🎉
