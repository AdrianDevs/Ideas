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
<!-- <div class="collapse xs:visible sm:hidden">Too small</div> -->
<!-- <div class="main invisible xs:visible"> -->
<div class="invisible flex h-screen flex-col xs:visible">
	<header class="relative space-x-6 bg-gray-200 py-2 text-center">
		{#each navItems as navItem (navItem.id)}
			<a
				href={navItem.url}
				class="rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
				>{navItem.id}
			</a>
		{/each}
	</header>

	<div class="flex flex-1 flex-col overflow-y-auto">
		<!-- <div class="w-screen"> -->
		<!-- <div class="flex-1">
			<h1>Content</h1>
			<p>
				What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
				an unknown printer took a galley of type and scrambled it to make a type specimen book. It
				has survived not only five centuries, but also the leap into electronic typesetting,
				remaining essentially unchanged. It was popularised in the 1960s with the release of
				Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
				software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a
				long established fact that a reader will be distracted by the readable content of a page
				when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
				normal distribution of letters, as opposed to using 'Content here, content here', making it
				look like readable English. Many desktop publishing packages and web page editors now use
				Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
				web sites still in their infancy. Various versions have evolved over the years, sometimes by
				accident, sometimes on purpose (injected humour and the like). Where does it come from?
				Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
				a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
				word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
				Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
				popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since
				the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de
				Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
				accompanied by English versions from the 1914 translation by H.
			</p>
		</div> -->
		<div class="flex-1">
			<slot />
		</div>

		<footer class="relative shrink-0 bg-gray-100 py-4 text-center text-black">
			Typescript, Tailwind and SvelteKit are Awesome 😎
		</footer>
	</div>
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
