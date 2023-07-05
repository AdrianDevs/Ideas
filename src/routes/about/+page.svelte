<script>
	import me from '$lib/images/happiness-squared.png';
	import GitHub from 'virtual:icons/mdi/github';
	import LinkedIn from 'virtual:icons/mdi/linkedin';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this site" />
</svelte:head>

<div class="flex justify-center">
	<div class="max-w-6xl p-4">
		<h1 class="text-4xl">About</h1>
		<hr class="my-4 h-px border-0 bg-blue-200 dark:bg-gray-700" />

		<div class="flex justify-center gap-16 p-4 xs:flex-col sm:flex-row">
			<section class="relative w-[240px] shrink-0 self-center">
				<picture class="flex-none">
					<img class="h-64 w-64 rounded-full object-fill" alt="profile of me" src={me} />
				</picture>
				<div class="flex flex-col items-center gap-1 py-4">
					<h2 class=" text-center text-2xl">Adrian Van Nierop</h2>
					<h3 class="text-x1 text-center">Engineering and Product Mananger</h3>
				</div>
				<div class="flex justify-center gap-2">
					<a rel="noopener noreferrer" href="https://github.com/adriandevs" target="_blank">
						<GitHub class="text-4xl hover:text-sky-400" />
					</a>
					<a rel="noopener noreferrer" href="https://www.linkedin.com/in/adrianvn/" target="_blank">
						<LinkedIn class="text-4xl hover:text-sky-400" />
					</a>
				</div>
			</section>
			<section>
				<p class="pb-4">
					Adrian Van Nierop lives and works in Auckland, New Zealand, and is psyched about
					everything software and product. He is a full-time software engineering manager, a
					part-time microbrew enthusiast, and a sometimes mountain biker.
				</p>
				<p class="pb-4">
					Adrian is an Engineering Manager at ColensoBBDO and specialises in SAAS Products. He has
					over 15+ years of professional experience in designing, building and delivering software
					with a keen focus on product viability and user desirability.
				</p>
				<p class="pb-4">
					He has worked across many platforms, including web, mobile, AR, and frameworks such as
					ASP.NET, Express, GoLang, Svelte, React, Next.js, iOS, Android and Unity.
				</p>
				<p>
					He is passionate about where Engineering, Design and Business meet on the web, especially
					AI and Web3.
				</p>
			</section>
		</div>
	</div>
</div>

<!-- 
<h1>Links to my other stuff</h1>
<h2>Agile Roadmap & Estimating</h2>
<h2>Git Flow</h2>
<h2>Minesweeper</h2>
<h2>Tic Tac Toe</h2>
<h2>Tetris</h2>
-->
