function jumpingOnClouds(c) {
	let jumps = 0

	for (let i = 0; i < c.length; i++) {
		if (c[i] === 0) {
			if (c[i + 2] === 0 && c[i + 1] === 0) {
				console.log('jumps 2')
				jumps++
				i++
			} else if (c[i + 2] === 0) {
				console.log('jumps 2')
				jumps++
			} else if (c[i + 1] === 0) {
				console.log('jumps 1')
				jumps++
			}
		}
	}
	console.log(jumps)
	return jumps
}

jumpingOnClouds([0, 0, 0, 1, 0, 0])
