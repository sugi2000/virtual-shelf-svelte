<script>
	import * as d3 from 'd3';
  import Spine from 'Spine.svelte';

	export let data;
</script>

<div class="book-shelf">
{#each d as data}
  <Spine data={d}/>
{/each}
</div>

<style>
.book-shelf {
	display: flex;
}
</style>