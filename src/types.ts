export type Categories = 'sveltekit' | 'svelte'

export type Post = {
    title: string
    slug: string
    lang: string
    description: string
    date: string
    categories: Categories[]
    published: boolean
}

