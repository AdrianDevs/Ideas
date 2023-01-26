<script>
	export let open = false;
</script>

<aside class="absolute h-full w-1/2 border-r-2 bg-gray-200 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="#about">About</a>
		<a class="block" href="#contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		left: -40%;
		float: top;
		transition: left 0.3s ease-in-out;
		background-color: burlywood;
	}

	.open {
		left: 0;
		background-color: aqua;
	}
</style>
