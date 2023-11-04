import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // ポート番号を指定
  },
  base: '/gpt-prompt-templates/' // GitHubリポジトリ名に置き換える
})
