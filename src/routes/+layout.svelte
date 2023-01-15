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

<div class="flex h-screen flex-col">
	<header class="collapse flex min-w-640 justify-center space-x-4 bg-gray-200 px-4 sm:visible">
		{#each navItems as navItem (navItem.id)}
			<a
				href={navItem.url}
				class="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
				>{navItem.id}</a
			>
		{/each}
	</header>
	<main class="collapse flex-1 overflow-y-auto sm:visible">
		<slot />
	</main>

	<div class="collapse xs:visible sm:collapse ">Too small</div>
	<div class="visible xs:collapse">So smol</div>

	<footer class="collapse bg-gray-100 py-4 text-center text-black sm:visible">
		Tailwind is Awesome 😎
	</footer>
</div>

<!-- <div>
<div class="collapse sm:visible">Just right</div>
<div class="collapse xs:visible sm:collapse ">Too small</div>
<div class="visible xs:collapse">So smol</div>
</div> -->

<!-- <div class="flex flex-col h-screen">
  <header class="py-5 bg-gray-700 text-white text-center">
    Sticky Header and Footer with Tailwind
  </header>
  <main class="flex-1 overflow-y-auto p-5">
    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book. It has survived
    not only five centuries, but also the leap into electronic typesetting,
    the 1914 translation by H. Rackham.
  </main>
  <footer class="py-5 bg-gray-700 text-center text-white">
    Tailwind is Awesome 😎
  </footer>
</div> -->

<!-- <div>
  <header class="sticky top-0 z-50"></header>
  <main class=relative></main>
  <footer></footer>
</div> -->
