<script lang="ts">
	import postcss from 'postcss';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Things I have experienced or taught myself" />
</svelte:head>

<h1 class="text-center text-lg font-bold text-black">My blog</h1>

<aside>
	<h2 class="font-bold text-black">Posts</h2>
	<ul>
		<!-- {data.posts} -->
		{#each data.posts as post (post.filename)}
			<li>
				<h4>title: {post.metadata.title}</h4>
				<h4>date: {post.metadata.date}</h4>
				<h4>id: {post.filename}</h4>
				<a class="text-blue-500" href="/blog/{post.filename}">link</a>
			</li>
		{/each}
	</ul>
</aside>

<div>
	<slot />
</div>

<section class="collapse bg-gray-100 p-4 text-left text-black sm:visible">
	<h1 class="text-center text-lg font-bold text-black">References</h1>
	<div class="grid grid-cols-2 justify-center justify-items-center">
		<div class="ml-16">
			<h2 class="mt-2 mb-1 font-bold text-black">Dependencies</h2>
			<ul class="list-inside list-none space-y-1 text-gray-700">
				<li>Grey Matter</li>
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
</section>
