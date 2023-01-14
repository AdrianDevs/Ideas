<script lang="ts">
	import type { PageData } from '../learn/$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Learn</title>
	<meta name="description" content="Learning Svelte" />
</svelte:head>

<h1>Learnings</h1>
<h2>{data.title}</h2>
<h3>{data.content}</h3>
