/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly APP_WRITE: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }