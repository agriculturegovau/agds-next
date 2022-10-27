const { rmdir, readdir, rename, rm } = require('fs/promises');

async function getPkgSlugs() {
	const entries = await readdir('./src', { withFileTypes: true });
	return entries
		.filter(
			(entry) =>
				!entry.name.startsWith('_') &&
				!entry.name.startsWith('.') &&
				!entry.name.startsWith('node_modules') &&
				entry.isDirectory()
		)
		.map((entry) => entry.name)
		.filter(Boolean);
}

async function main() {
	const slugs = await getPkgSlugs();

	slugs.map(async (slug) => {
		await rm(`./src/${slug}/CHANGELOG.md`);

		// const files = await readdir(`./${slug}/src`, { withFileTypes: true });
		// files.map(async (file) => {
		// 	await rename(
		// 		`./${slug}/src/${file.name}`,
		// 		`./${slug}/${file.name}`,
		// 		(err) => {
		// 			if (err) throw err;
		// 			console.log('Rename complete!');
		// 		}
		// 	);
		// });
		// mv(`./${slug}/src`, `./${slug}`, { mkdirp: true }, function (err) {
		// 	console.log(err);
		// 	// done. it tried fs.rename first, and then falls back to
		// 	// piping the source file to the dest file and then unlinking
		// 	// the source file.
		// });
	});
}

main();
