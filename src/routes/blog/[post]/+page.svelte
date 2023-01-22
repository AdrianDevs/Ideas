<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>
<div class="markdown-post">
	<svelte:component this={data.content} />
</div>
  <!-- <svelte:component this={data.content} /> -->


<!-- class="w-[900px] flex-initial justify-self-center overflow-y-auto" -->

<!-- <style>
.markdown-body {
	width: 660px;
	flex: 0 1 auto;
	justify-self: center;
	overflow-y: auto;
}

.toc {
	width: 240px;
}

</style> -->
