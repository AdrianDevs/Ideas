<script lang="ts">
	import postcss from 'postcss';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	import Sidebar from '../../components/Sidebar.svelte';
	import Hamburger from '../../components/Hamburger.svelte';

	let open = false;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>

{#if data.postSelected}
	<div class="absolute top-0 left-0 z-10 p-2 sm:hidden">
		<Hamburger bind:open />
	</div>

	<section class="relative flex h-full justify-center overflow-y-auto">
		<div class="sm:hidden">
			<Sidebar bind:open>
				<ul class="z-10 p-4">
					{#each data.posts as post (post.filename)}
						<li class="py-2">
							<a class="font-bold" href="/blog/{post.filename}">{post.title}</a>
							<p class="ml-2 text-gray-500">{post.date}</p>
						</li>
					{/each}
				</ul>
			</Sidebar>
		</div>

		<aside class="hidden h-full w-[240px] shrink-0 overflow-y-auto bg-gray-100 px-4 sm:block">
			<h2 class="py-4 text-3xl">Posts</h2>
			<ul>
				{#each data.posts as post (post.filename)}
					<li class="py-2">
						<a class="font-bold" href="/blog/{post.filename}">{post.title}</a>
						<p class="ml-2 text-gray-500">{post.date}</p>
					</li>
				{/each}
			</ul>
		</aside>

		<div class="relative h-full flex-initial overflow-y-auto">
			<slot />
		</div>
	</section>
{:else}
	<div class="flex flex-col items-center text-center">
		<h2 class="py-4 text-3xl">Posts</h2>
		<ul>
			{#each data.posts as post (post.filename)}
				<li class="py-2">
					<a class="font-bold" href="/blog/{post.filename}">{post.title}</a>
					<p class="ml-2 text-gray-500">{post.date}</p>
				</li>
			{/each}
		</ul>
	</div>
{/if}
