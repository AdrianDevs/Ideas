<script lang="ts">
	import postcss from 'postcss';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	import Sidebar from '../../components/Sidebar.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import Main from '../../components/Main.svelte';
	// import Sidebar from '$components/Sidebar.svelte';
	// import { getFrontMatter } from '$lib/posts';

	let open = false;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<Main />
<!-- <section class="flex h-full justify-center">
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

	<div class="relative h-full w-[900px] flex-initial overflow-y-auto">
		<slot />
	</div>
</section> -->

<!-- <aside class="open h-full w-full border-r-2 bg-gray-200 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="#about">About</a>
		<a class="block" href="#contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
		background-color: aqua;
	}
</style> -->
