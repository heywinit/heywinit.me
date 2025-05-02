/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly FORMSPREE_PROJECT_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
