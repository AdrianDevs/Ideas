<script lang="ts">
	import type { PageData } from '../learn/$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Learn</title>
	<meta name="description" content="Learning Svelte" />
</svelte:head>

<h1>Learnings</h1>
<h2>{data.title}</h2>
<h3>{data.content}</h3>

<h1>Notes</h1>
<h2>Tutorials</h2>
<h3>Build a Static Sveltekit Markdown Blog</h3>
Link: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog