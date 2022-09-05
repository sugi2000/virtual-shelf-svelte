<script>
	import * as d3 from 'd3';
	// import x2js from 'x2js';
	export let data;
	// import { page } from '$app/stores';
	import {searchISBN} from './search.js';

	$: isbn = data.isbn;

	// console.log($page);

	// const searchISBN = async (isbn) => {
	// 	// const dpid = ["iss-ndl-opac", "ciniib"].join(" ");
	// 	const dpid = "iss-ndl-opac"; // data privider id
	// 	// const dpid = "ciniib";
	// 	const mediatype = 1; // 1: Books

	// 	const query = {
	// 		isbn,
	// 		dpid,
	// 		mediatype,
	// 		idx: 1,
	// 		cnt: 500
	// 	};

	// 	const queryString = Object.entries(query)
	// 		.map(([key, value]) => `${key}=${encodeURI(value)}`)
	// 		.join("&");

	// 	const endpoint = "https://iss.ndl.go.jp/api/opensearch";
	// 	const url = `${endpoint}?${queryString}`;
	// 	// return url;

	// 	const proxy = "https://class.sugimototatsuo.com/proxy.php";
 	// 	const openXML = await d3.xml(
  // 	  proxy + "?method=GET&cors=" + encodeURIComponent(url)
  // 	);
	// 	// const openXML = await d3.xml(url);
	// 	// return openXML;
	// 	const openXMLText = new XMLSerializer().serializeToString(openXML);
	// 	// return openXMLText;


	// 	const xml = (new window.DOMParser()).parseFromString(openXMLText, "text/xml");
	// 	console.log(xml.querySelector('rss channel item title'));
	// 	return {
	// 		title: xml.querySelector('rss channel item title').textContent
	// 	};

	// 	// const rss = x2js.xml2js(openXMLText).rss;
	// 	// return rss;
	// 	// return rss.channel.item || undefined;

	// }

	$: item = searchISBN(isbn);

</script>

{#await item}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
	width="30" height="400" class="book-spine">
		<rect width="30" height="400" fill="#800"></rect>
		<text x="0" y="50" font-family="sans-serif" fill="#fff">{isbn}</text>
</svg>
{:then result}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
	width="30" height="400" class="book-spine">
		<rect width="30" height="400" fill="#800"></rect>
		<text x="15" y="50" font-family="sans-serif" fill="#fff">{result.title}</text>
</svg>
{:catch error}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
	width="30" height="400" class="book-spine">
		<rect width="30" height="400" fill="#800"></rect>
		<text x="0" y="50" font-family="sans-serif" fill="#fff">{`error`}</text>
</svg>
{/await}

<style>
svg {
	display: inline-block;
	margin: 1px;
}
svg text {
	writing-mode: vertical-rl;
}
</style>