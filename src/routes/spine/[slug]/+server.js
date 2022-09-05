import * as d3 from 'd3';
import { searchISBN } from '$lib/search.js';

/** @type {import('./$types').RequestHandler} */
// export function GET(event) {
export function GET({ params }) {
	const slug = params.slug.split('/');
	const isbn = slug.at(0);
	// console.log('isbn:', isbn);

	const title = searchISBN(isbn);
	console.log(title);

	// const svg = d3
	// 	.create('svg')
	// 	.attr('xmlns', 'http://www.w3.org/2000/svg')
	// 	.attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
	// 	.attr('version', 1.1)
	// 	.attr('width', 30)
	// 	.attr('height', 420);

	// svg.append('g').append('rect').attr('width', 30).attr('height', 420).attr('fill', '#888');

	const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100" height="100">
		<rect width="100" height="100" fill="#000"></rect>
		<text x="0" y="50" font-family="sans-serif" fill="#fff">${isbn}</text>
	</svg>`;

	// console.log(svg);

	return new Response(new String(svg), {
		headers: {
			'content-type': 'image/svg+xml'
		}
	});
}
