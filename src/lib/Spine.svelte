<script>
	import * as d3 from 'd3';
	export let data;
</script>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
	width="30" height="400" class="book-spine">
		<rect width="30" height="400" fill="#800"></rect>
		<text x="0" y="50" font-family="sans-serif" fill="#fff">{data.isbn}</text>
</svg>

<style>
svg {
	display: inline-block;
	margin: 10px;
}

</style>