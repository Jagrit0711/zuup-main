# Zuup 

Welcome to the **Zuup** frontend repository! This is the main platform powering the Zuup ecosystem, including our Careers page, Events, SaaS platform,
## 🤔 What is Zuup?

Zuup is a nonprofit organization dedicated to empowering youth. We provide counseling, teach young people how to build and ship cool tech projects, and promote personal brand building. Whether it's through community events, chapters in different cities, or hands-on corporate-style volunteering, we're all about community connections, learning, and getting things done!

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [radix-ui](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Fetching / State**: [TanStack Query](https://tanstack.com/query/latest)
- **Authentication & Backend**: proxied securely through the **Zuup Auth Gateway**

---

## 🌟 Key Features

- **Zuup Careers (`/careers`)**: Dynamic job listings and details fetching straight from our database.
- **Zuup City (`/zuup-in/:city`)**: Localized landing pages for community chapters.
- **Admin Dashboards (`/jobadmin`)**: Centralized dashboard to manage jobs, protected by our custom SSO provider.
- **Dynamic Routing**: Built-in support for single-page application (SPA) paths, natively supporting Cloudflare Pages deployment with automated `_redirects`.

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm` installed.

### 1. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Jagrit0711/zuup-main.git
cd zuup-main
npm install
```


### 2. Run the Development Server

Start the Vite development server (configured to use port `5173` with increased HTTP header limits to support large JWT callback tokens):

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist` folder. If deploying to **Cloudflare Pages**, the included `public/_redirects` file guarantees dynamic paths function correctly on reload.

---

## 🎨 Project Structure

- `src/components/`: Reusable UI components (including Shadcn components).
- `src/pages/`: All primary page routes (e.g., `JobDetail`, `AdminLogin`, `ZuupStore`).
- `src/integrations/supabase/client.ts`: The global Supabase client mapped to the Zuup Auth proxy.
- `public/`: Static assets, images, Moza illustrations, and deployment configuration files.

## 🤝 Contributing

We welcome contributions to the Zuup platform! Please ensure your code adheres to standard React best practices, and that UI additions follow our highly vibrant, premium design language.
