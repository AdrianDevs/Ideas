<script>
	import { clickOutside } from '$lib/clickOutside';

	export let open = false;

	function handleMenuClick() {
		console.group('handle menu click');

		if (open) {
			console.log('is open - close');
			open = false;
		} else {
			console.log('is closed - do nothing');
		}
		console.groupEnd();
	}
</script>

<!-- <aside
	class="absolute top-0 bottom-0 flex w-screen flex-row overflow-y-auto "
	class:open
	on:click={handleMenuClick}
	on:keyup={handleMenuClick}
>
	<nav class="w-[240px] flex-none border-r-2 bg-gray-300 shadow-lg">
		<slot />
	</nav>

	<div class="invisible flex-1">Filler</div>
</aside> -->

<aside
	class="absolute top-0 bottom-0 z-10 flex w-screen flex-row overflow-y-auto"
	class:open
	use:clickOutside
	on:click={handleMenuClick}
	on:keyup={handleMenuClick}
>
	<nav class="w-[240px] flex-none border-r-2 bg-gray-200  shadow-lg">
		<slot />
	</nav>

	<div class="invisible flex-1">Filler</div>
</aside>

<style>
	aside {
		left: -240px;
		transition: left 0.3s ease-in-out;
		pointer-events: none;
	}

	.open {
		left: 0;
		pointer-events: auto;
	}
</style>
