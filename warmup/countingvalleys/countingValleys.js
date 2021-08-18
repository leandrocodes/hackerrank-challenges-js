function countingValleys(n, path) {
	let valleys = 0
	let elevation = 0

	const steps = path.split('')

	for (let step of steps) {
		if (step === 'D') {
			elevation--
		} else {
			elevation++
			if (elevation === 0) valleys++
		}
	}
	console.log(valleys)
	return valleys
}

countinValleys(8, 'DUDDDUUDUU')
