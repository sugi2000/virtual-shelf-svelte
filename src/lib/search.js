import * as d3 from 'd3';

export async function searchISBN(isbn) {
	// const dpid = ["iss-ndl-opac", "ciniib"].join(" ");
	const dpid = 'iss-ndl-opac'; // data privider id
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
		.join('&');

	const endpoint = 'https://iss.ndl.go.jp/api/opensearch';
	const url = `${endpoint}?${queryString}`;
	// return url;

	const proxy = 'https://class.sugimototatsuo.com/proxy.php';
	const openXML = await d3.xml(proxy + '?method=GET&cors=' + encodeURIComponent(url));
	// const openXML = await d3.xml(url);
	// return openXML;
	const openXMLText = new XMLSerializer().serializeToString(openXML);
	// return openXMLText;

	const xml = new window.DOMParser().parseFromString(openXMLText, 'text/xml');
	console.log(xml.querySelector('rss channel item title'));
	return {
		title: xml.querySelector('rss channel item title').textContent
	};

	// const rss = x2js.xml2js(openXMLText).rss;
	// return rss;
	// return rss.channel.item || undefined;
}
