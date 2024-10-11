import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // server: {
  //   proxy: {
  //     "/api/": {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  //   cors: true,
  // }
		// preview: {
		// 	proxy: {
		// 		"/api": {
		// 			target: 'http://localhost:3000',
		// 			changeOrigin: true,
		// 			secure: false,
		// 			rewrite: (p) => p.replace(/^\/api/, ""),
		// 		},
		// 	},
		// 	cors: false,
		// },
})



