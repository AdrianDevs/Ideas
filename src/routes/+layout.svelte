<script lang="ts">
	import '../app.css';

	let navItems = [
		{ id: 'Home', url: '/' },
		{ id: 'Blog', url: '/blog' },
		{ id: 'Tech', url: '/tech' },
		{ id: 'Quotes', url: '/quotes' },
		{ id: 'Travel', url: '/travel' },
		{ id: 'Learn', url: '/learn' },
		{ id: 'About', url: '/about' },
		{ id: 'Links', url: '/links' }
	];
</script>

<div class="visible xs:hidden">So smol</div>
<!-- <div class="collapse xs:visible sm:hidden">Too small</div> -->
<div class="main invisible xs:visible">
	<header class="min-w-640 space-x-2 bg-gray-200 py-2 text-center md:space-x-6">
		{#each navItems as navItem (navItem.id)}
			<a
				href={navItem.url}
				class="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
				>{navItem.id}
			</a>
		{/each}
	</header>

	<content class="content">
		<div class="w-screen">
			<slot />
		</div>

		<footer class="bg-gray-100 py-4 text-center text-black">
			Typescript, Tailwind and SvelteKit are Awesome 😎
		</footer>
	</content>
</div>

<!-- <div class="flex h-screen flex-col">
	<header class="collapse flex min-w-640 justify-center space-x-4 bg-gray-200 px-4 sm:visible">
		{#each navItems as navItem (navItem.id)}
			<a
				href={navItem.url}
				class="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
				>{navItem.id}</a
			>
		{/each}
	</header>

	<main class="flex-inital collapse h-screen overflow-y-auto sm:visible">
		<slot />
	</main>

	<div class="collapse xs:visible sm:collapse ">Too small</div>
	<div class="visible xs:collapse">So smol</div>

	<footer class="collapse bg-gray-100 py-4 text-center text-black sm:visible">
		Typescript, Tailwind and SvelteKit are Awesome 😎
	</footer>
</div> -->
