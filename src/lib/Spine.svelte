<script>
	import * as d3 from 'd3';
	export let data;

	$: isbn = data.isbn;

	const searchISBN = async (isbn) => {
		// const dpid = ["iss-ndl-opac", "ciniib"].join(" ");
		const dpid = "iss-ndl-opac"; // data privider id
		// const dpid = "ciniib";
		const mediatype = 1; // 1: Books

		const query = {
			isbn,
			dpid,
			mediatype,
			idx: 1,
			cnt: 500
		};

		const queryString = Object.entries(query)
			.map(([key, value]) => `${key}=${encodeURI(value)}`)
			.join("&");

		const endpoint = "https://iss.ndl.go.jp/api/opensearch";
		const url = `${endpoint}?${queryString}`;
		// return url;

		const openXML = await d3.xml(`https://sugi2000cors.herokuapp.com/` + url);
		// return openXML;
		const openXMLText = new XMLSerializer().serializeToString(openXML);
		// return openXMLText;
		const rss = x2js.xml2js(openXMLText).rss;
		// return rss;

		return rss.channel.item || undefined;
	}

	$: item = searchISBN(isbn);

</script>

{#await item}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
	width="30" height="400" class="book-spine">
		<rect width="30" height="400" fill="#800"></rect>
		<text x="0" y="50" font-family="sans-serif" fill="#fff>{isbn}text>
</svg>
{:then result}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
	width="30" height="400" class="book-spine">
		<rect width="30" height="400" fill="#800"></rect>
		<text x="0" y="50" font-family="sans-serif" fill="#fff">{result.title[0]}</text>
</svg>
{:catch error}
error
{/await}

<style>
svg {
	display: inline-block;
	margin: 1px;
}

</style>