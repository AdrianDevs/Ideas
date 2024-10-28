<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	import { navigating } from '$app/stores';
	import { Jellyfish } from 'svelte-loading-spinners';

	import Sidebar from '../../components/Sidebar.svelte';
	import Hamburger from '../../components/Hamburger.svelte';

	let open = false;

	import { afterNavigate, beforeNavigate } from '$app/navigation';

	beforeNavigate((navigation) => {
		console.group('Navigation started');
		console.log('to:', navigation.to);
		if (navigation.to?.route.id == '/blog') {
			console.log('navigating to blog');
		}
		if (navigation.to?.route.id == '/blog/[post]') {
			console.log('navigating to blog post');
		}
		console.groupEnd();
	});

	afterNavigate(() => {
		console.log('Navigation ended');
	});
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>

{#if !data.postSelected && $navigating?.to?.route.id === '/blog/[post]'}
	<div class="font-bold] mt-16 flex flex-col items-center self-center">
		<h1 class="mb-4 font-bold">Loading blog post ...</h1>
		<Jellyfish size="60" color="#FF3E00" unit="px" duration="1.5s" />
	</div>
{:else if data.postSelected}
	<div class="absolute left-0 top-0 z-10 p-2 sm:hidden">
		<Hamburger bind:open />
	</div>

	<section class="relative flex h-full justify-center overflow-y-auto">
		<!-- Mobile view -->
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

		<!-- Desktop view -->
		<aside
			class="hidden h-full w-[240px] shrink-0 justify-self-start overflow-y-auto bg-gray-100 px-4 sm:block"
		>
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

		<div class="relative h-full w-[900px] flex-initial overflow-y-auto">
			<slot />
		</div>
	</section>
{:else}
	<div class="flex justify-center xs:mx-4 md:mx-16">
		<div class="w-full max-w-[1144px] py-4">
			<h1 class="text-4xl">Posts</h1>
			<hr class="my-4 h-px border-0 bg-blue-200 dark:bg-gray-700" />
			<h4 class="pt-4 text-center text-lg">
				A work in progess. I will use this area to upload markdown files and have them appear as
				navigateable web pages.
			</h4>
		</div>
	</div>

	<div class="flex flex-col items-center text-center">
		<!-- <h2 class="py-4 text-3xl">Posts</h2> -->
		<!-- <h1 class="pt-8 text-4xl">Posts</h1> -->
		<!-- <h4 class="pl-4 pr-4 pt-4 text-lg">
			A work in progess. I will use this area to upload markdown files and have them appear as
			navigateable web pages.
		</h4> -->
		<ul class="pt-8">
			{#each data.posts as post (post.filename)}
				<li class="py-2">
					<a class="font-bold" href="/blog/{post.filename}">{post.title}</a>
					<p class="ml-2 text-gray-500">{post.date}</p>
				</li>
			{/each}
		</ul>
	</div>
{/if}
