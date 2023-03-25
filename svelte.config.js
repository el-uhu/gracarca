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
			strict: true
		}),
		paths: {
			base : '/gracarca',
			relative: true
		}
	},
	vitePlugin: {
		experimental: {
			inspector: { holdMode: true },
		}
	},
};

export default config;