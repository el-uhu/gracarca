import { readFileSync } from "fs";
import adapterStatic from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';
import autoprefixer from "autoprefixer";


const { subdirectory } = JSON.parse(readFileSync("package.json", "utf8"));
const dev = process.env.NODE_ENV !== "production";
const dir = subdirectory || "";
const prefix = dir.startsWith("/") ? "" : "/";
const base = dev || !dir ? "" : `${prefix}${dir}`;


const config = {
	preprocess: seqPreprocessor([
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			}
		}), 
		preprocessThrelte()]),
	kit: {
		adapter: adapterStatic(),
		paths: {
			base : '/gracarca'
		},
	},
	vitePlugin: {
		experimental: {
			inspector: { holdMode: true },
		}
	},
};

export default config;