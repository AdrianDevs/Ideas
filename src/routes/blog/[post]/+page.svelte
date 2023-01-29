<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>

<h1 class="pl-10 pt-4 text-4xl font-bold lg:hidden">{data.title}</h1>
<div class="markdown-post">
	<svelte:component this={data.content} />
</div>
