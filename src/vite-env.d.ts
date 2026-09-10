/// <reference types="vite/client" />

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

interface Window {
  fbq?: (
    action: string,
    event: string,
    params?: Record<string, unknown>
  ) => void;
  _fbq?: unknown;
}
