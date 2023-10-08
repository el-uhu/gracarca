import { readFileSync } from "fs";
import adapterStatic from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';
import autoprefixer from "autoprefixer";
import { mdsvex } from 'mdsvex';


const { subdirectory } = JSON.parse(readFileSync("package.json", "utf8"));
const dev = process.env.NODE_ENV !== "production";
const dir = subdirectory || "";
const prefix = dir.startsWith("/") ? "" : "/";
const base = dev || !dir ? "" : `${prefix}${dir}`;


const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: seqPreprocessor([
		mdsvex({
			extensions: ['.md', '.svx'],
		}),
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			}
		}), 
		preprocessThrelte()]),
	kit: {
		adapter: adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: false
		}),
		prerender : {
			handleHttpError: 'warn',
			entries: [
				'/de/01',
				'/de/02',
				'/de/03',
				'/de/04',
				'/de/05',
				'/de/06',
				'/en/01',
				'/en/02',
				'/en/03',
				'/en/04',
				'/en/05',
				'/en/06',
				'/si/01',
				'/si/02',
				'/si/03',
				'/si/04',
				'/si/05',
				'/si/06',
				'/de',
				'/en',
				'/si'
			]
		},
		paths: {
			base : '',
			relative: false
		}
	},
	vitePlugin: {
		experimental: {
			inspector: { holdMode: true },
		}
	},
};

export default config;