<script>
	import Counter from '$lib/Counter.svelte';
	import Shelf from "$lib/Shelf.svelte";

	let isbns = `9784098253937
9784098254149
9784098254026
9784098254132
9784098253746
9784098254095
9784098254064
9784098254033
9784098254002
9784098254118`;

	$: data = isbns.split('\n').map(isbn => ({isbn}));

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
	<textarea bind:value={isbns}></textarea>

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
