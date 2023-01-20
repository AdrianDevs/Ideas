<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>

<div class="text-center text-lg font-bold text-black">Post Details</div>
<div>{data.title}</div>
<div>Published: {data.date}</div>
<div class="post content">
	<svelte:component this={data.content} />
</div>

<!-- <style>
	.post.content {
		color: purple;
    
	}
</style> -->
