<script lang="ts">
	import postcss from 'postcss';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	import Sidebar from '../../components/Sidebar.svelte';
	import Hamburger from '../../components/Hamburger.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import Main from '../../components/Main.svelte';

	import { clickOutside } from '$lib/clickOutside';
	// import Sidebar from '$components/Sidebar.svelte';
	// import { getFrontMatter } from '$lib/posts';

	let open = false;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>

{#if data.postSelected}
	<section class="flex h-full justify-center sm:hidden">
		<div class="absolute top-0 left-0 z-10 p-2">
			<Hamburger bind:open />
		</div>

		<div class="relative h-full w-[900px] flex-initial overflow-y-auto">
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

			<div>
				<slot />
			</div>
		</div>
	</section>

	<section class="hidden h-full justify-center sm:flex">
		<aside class="h-full w-[240px] shrink-0 overflow-y-auto bg-gray-100 px-4">
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

<!-- <Sidebar bind:open /> -->

<!-- <Sidebar bind:open>
	<ul>
		{#each data.posts as post (post.filename)}
			<li class="py-2">
				<a class="font-bold" href="/blog/{post.filename}">{post.title}</a>
				<p class="ml-2 text-gray-500">{post.date}</p>
			</li>
		{/each}
	</ul>
</Sidebar> -->

<!-- <Main /> -->
