import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vitejs.dev/config/
const env = loadEnv(mode, process.cwd(), '')
export default defineConfig({
  plugins: [react()]
  ,
  define: {
    'process.env': {API :process.env.VITE_URL},
    VITE_URL:JSON.stringify(env.VITE_URL)
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }}
});