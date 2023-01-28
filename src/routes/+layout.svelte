<script lang="ts">
	import '../app.css';

	let navItems = [
		{ id: 'Home', url: '/' },
		{ id: 'Blog', url: '/blog' },
		// { id: 'Tech', url: '/tech' },
		// { id: 'Quotes', url: '/quotes' },
		// { id: 'Travel', url: '/travel' },
		// { id: 'Learn', url: '/learn' },
		// { id: 'About', url: '/about' },
		{ id: 'Links', url: '/links' }
	];
</script>

<div class="visible xs:hidden">So smol</div>
<div class="invisible flex h-screen flex-col xs:visible">
	<header class="relative space-x-6 bg-gray-200 py-2 text-center">
		{#each navItems as navItem (navItem.id)}
			<a
				href={navItem.url}
				class="rounded-lg px-3 py-2 text-xl font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
				>{navItem.id}
			</a>
		{/each}
	</header>

	<div class="flex flex-1 flex-col overflow-y-auto">
		<div class="flex-1">
			<slot />
		</div>

		<footer class="shrink-0 bg-gray-100 py-4 text-center text-black">
			Typescript, Tailwind and SvelteKit are Awesome 😎
		</footer>
	</div>
</div>
