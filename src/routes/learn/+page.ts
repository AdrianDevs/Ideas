// export const ssr = true
// export const csr = false
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';


export const load = (async () => {
    console.log('learnings load')
    return {
        title: 'Hello Learnings',
        content: 'Learning Svelte, SvelteKit, Go, Web standars, Game engine development'
    };

    // throw error(404, 'Not found')
}) satisfies PageLoad;