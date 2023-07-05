<script>
	import me from '$lib/images/me.png';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this site" />
</svelte:head>

<!--
add photo
add GitHub link
add LinkedIn link
make responsive
style
draw dividing line under title heading
-->

<!-- <section class="w-screen justify-center gap-x-4 bg-gray-100 py-4 xs:flex sm:hidden">
	<picture class="flex-none">
		<img class="object-center" alt="profile of me" src={me} />
	</picture>
</section> -->

<h1>About</h1>

<!-- Small screens -->
<section class="justify-center bg-slate-200 xs:flex sm:hidden">
	<p>what 1</p>
	<p>what 2</p>
</section>

<!-- Big screens -->
<section class="justify-center bg-slate-200 xs:hidden sm:flex">
	<div>
		<picture class="flex-none">
			<img class="h-64 w-64 object-fill" alt="profile of me" src={me} />
		</picture>
		<h2>Adrian Van Nierop</h2>
		<h3>Engineering and Product Mananger</h3>
	</div>
	<div>
		<p>
			Adrian Van Nierop lives and works in Auckland, New Zealand, and is psyched about everything
			software and product. He is a full-time software engineering manager, a part-time microbrew
			enthusiast, and a sometimes mountain biker.
		</p>

		<p>
			Adrian is an Engineering Manager at ColensoBBDO and specialises in SAAS Products. He has over
			15+ years of professional experience in designing, building and delivering software with a
			keen focus on product and user desirability and worked across many platforms, including web,
			mobile, AR, and frameworks such as ASP.NET, Express, GoLang, Svelte, React, Next.js, iOS,
			Android and Unity. He is passionate about where Engineering, Design and Business meet on the
			web, especially AI and Web3.
		</p>
	</div>
</section>

<!-- <h1>Links to my other stuff</h1>
<h2>Agile Roadmap & Estimating</h2>
<h2>Git Flow</h2>
<h2>Minesweeper</h2>
<h2>Tic Tac Toe</h2>
<h2>Tetris</h2> -->
