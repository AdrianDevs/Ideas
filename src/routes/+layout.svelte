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

<div class="flex flex-col">
	<div class="collapse sm:visible">
		<div class="flex min-w-640 justify-center space-x-4 bg-gray-50">
			{#each navItems as navItem (navItem.id)}
				<a
					href={navItem.url}
					class="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
					>{navItem.id}</a
				>
			{/each}
		</div>
		<slot />
	</div>
	<div class="collapse xs:visible sm:collapse ">Too small</div>
	<div class="visible xs:collapse">So smol</div>
</div>
