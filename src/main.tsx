import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Redirect zuup.lovable.app to zuup.dev preserving path
if (window.location.hostname === 'zuup.lovable.app') {
  window.location.replace(`https://zuup.dev${window.location.pathname}${window.location.search}${window.location.hash}`);
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
