import Inspect from 'vite-plugin-inspect'

export default {
	base: "/shop_electrics/",
	plugins: [Inspect(),],
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				main: './index.html',
				bag: './bag.html',
				checkout: './checkout.html',
				info: './info.html',
			}
		}
	}
}