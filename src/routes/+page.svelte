<script>
	import Counter from '$lib/Counter.svelte';
	import Spine from "$lib/Spine.svelte";

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
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />

	<div class="test">Test.日本語</div>
	<img src="/spine/0123" />
	<img src="/spine/4567" />
	<Spine {data} />
	<Spine data={{isbn:456}} />

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
