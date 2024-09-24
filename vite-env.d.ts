// vite-env.d.ts
interface ImportMetaEnv {
    VITE_API_URL: string; // Definindo como string, pois a URL é uma string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  