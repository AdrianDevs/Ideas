<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import { navigating } from '$app/stores';
	import { RingLoader } from 'svelte-loading-spinners';
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>

{#if $navigating}
	<div class="font-bold] mt-16 flex flex-col items-center self-center">
		<h1 class="mb-4 font-bold">Loading blog post ...</h1>
		<RingLoader size="60" color="#FF3E00" unit="px" duration="1.5s" />
	</div>
{:else}
	<div class="overflow-y-auto">
		<h1 class="pl-10 pt-4 text-4xl font-bold lg:hidden">{data.title}</h1>
		<div class="markdown-post">
			<svelte:component this={data.content} />
		</div>
	</div>
{/if}
