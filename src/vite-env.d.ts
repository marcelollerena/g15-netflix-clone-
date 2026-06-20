interface ImportMetaEnv {
  readonly VITE_FAKESTORE_DOMAIN: string;
  readonly VITE_TMDB_DOMAIN: string;

  readonly VITE_TMDB_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
