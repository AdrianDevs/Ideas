<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>
<div class="p-2">
	<div class="text-3xl text-black">{data.title}</div>
	<div class="text-xl text-gray-500">Published: {data.date}</div>
	<div class="prose prose-slate">
		<svelte:component this={data.content} />
	</div>
</div>

<!-- <style>
	.post.content {
		color: purple;
    
	}
</style> -->
