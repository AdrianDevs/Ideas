<script lang="ts">
	import postcss from 'postcss';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	import { getFrontMatter } from '$lib/posts';
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>

<section class="flex h-full justify-center">
	<!-- <aside class="sticky h-full w-[240px] shrink-0 overflow-y-auto bg-gray-500 px-4"> -->
	<aside class="h-full w-[240px] shrink-0 overflow-y-auto bg-gray-100 px-4">
		<h2 class="py-4 text-3xl">Posts</h2>
		<!-- {data.posts} -->
		<ul>
			{#each data.posts as post (post.filename)}
				<li class="py-2">
					<a class="font-bold" href="/blog/{post.filename}">{post.title}</a>
					<p class="ml-2 text-gray-500">{post.date}</p>
				</li>
			{/each}
		</ul>
	</aside>
	<!-- <code class="language-markup">
		$
		<span class="token function"> yarn </span>
		<span class="token function"> add </span>
		<span class="token parameter variable"> --dev </span>
		eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks
		prettier eslint-config-prettier lint-staged husky import-sort-style-module prettier-plugin-import-sort
	</code> -->

	<!-- <main class="w-[900px] flex-initial justify-self-center overflow-y-auto">
    <slot />
  </main> -->
	<div class="relative h-full w-[900px] flex-initial overflow-y-auto">
		<slot />
	</div>

	<!-- <aside class="sticky top-0 w-[240px] shrink-0 overflow-y-auto bg-gray-50 px-4">
		<h2 class="py-2 text-2xl">Contents</h2>
		<ul>
			<li class="py-2">Section 1</li>
			<li class="py-2">Section 2</li>
			<li class="py-2">Section 3</li>
		</ul>
	</aside> -->
</section>

<!-- <aside>
	<h2 class="font-bold text-black">Posts</h2>
	<ul>
		{#each data.posts as post (post.filename)}
			<li>
				<h4>title: {post.metadata.title}</h4>
				<h4>date: {post.metadata.date}</h4>
				<h4>id: {post.filename}</h4>
				<a class="text-blue-500" href="/blog/{post.filename}">link</a>
			</li>
		{/each}
	</ul>
</aside> -->

<!-- <div>
	<slot />
</div> -->

<!-- <section class="collapse bg-gray-100 p-4 text-left text-black sm:visible">
	<h1 class="text-center text-lg font-bold text-black">References</h1>
	<div class="grid grid-cols-2 justify-center justify-items-center">
		<div class="ml-16">
			<h2 class="mt-2 mb-1 font-bold text-black">Dependencies</h2>
			<ul class="list-inside list-none space-y-1 text-gray-700">
				<li>MDsveX</li>
			</ul>
		</div>
		<div class="mr-16">
			<h2 class="mt-2 mb-1 font-bold text-black">Tutorials</h2>
			<ul class="list-inside list-none space-y-1 text-gray-700">
				<li>
					<a href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog">
						Build a Static Sveltekit Markdown Blog
					</a>
				</li>
			</ul>
		</div>
	</div>
</section> -->