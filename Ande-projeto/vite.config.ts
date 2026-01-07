import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    // Adicionamos o plugin do Sentry aqui
    sentryVitePlugin({
      org: "SEU_ORG_SLUG",     // Ex: aline-lima-dev (Pegue no Sentry > Settings > General)
      project: "SEU_PROJETO",  // Ex: ong-ande (Pegue na lista de projetos do Sentry)
    }),
  ],
  // Importante: Habilita os mapas para o Sentry ler o código
  build: {
    sourcemap: true,
  },
  // Sua configuração de testes continua intacta aqui
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    globals: true,
  }
})