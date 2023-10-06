import { error } from '@sveltejs/kit'

export async function load({ params }) {
    try {
        const post = await import(`../../../data/${params.lang}/${params.slug}.svx`)

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        throw error(404, `Could not find ${params.lang}/${params.slug}`)
    }
}