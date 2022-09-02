<script>
	import Counter from '$lib/Counter.svelte';
	import Shelf from "$lib/Shelf.svelte";

	const data = ({isbn: 123});

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Virtual shelves" />
</svelte:head>

<section>
	<h1>
		Virtual shelves
	</h1>
	<h2>
		仮想書棚
	</h2>
	<Shelf {data}/>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
