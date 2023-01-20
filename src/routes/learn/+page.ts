// export const ssr = true
// export const csr = false
// import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';


export const load = (async () => {
    console.log('learnings load')
    return {
        title: 'Things I am learning',
        content: 'Svelte, SvelteKit, Go, Web standards, Rust, C++, Game engine development'
    };

    // throw error(404, 'Not found')
}) satisfies PageLoad;