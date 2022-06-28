import resource from 'resource-router-middleware';
const https = require('https');

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id: 'hash',

	/** GET / - List all entities */
	index({ query }, response) {
		const { timestamp } = query;
		let data = '';

		https.get(`https://blockchain.info/blocks/${timestamp}?format=json`,
			res => {
				res.on('data', chunk => data += chunk);
				res.on('end', () => {
					data = JSON.parse(data);
					response.json(data);
				});
			}).on('error', (e) => {
				console.error(`Got error: ${e.message}`);
			});;
	},

	/** GET /:id - Return a given entity */
	read({ params: { hash } }, response) {
		let data = '';

		https.get(`https://blockchain.info/rawblock/${hash}`,
			res => {
				res.on('data', chunk => data += chunk);
				res.on('end', () => {
					data = JSON.parse(data);
					const { hash, size, block_index, prev_block, tx } = data;
					response.json({
						hash,
						size,
						block_index,
						prev_block,
						tx
					});
				});
			}).on('error', (e) => {
				console.error(`Got error: ${e.message}`);
			});;
	},
});