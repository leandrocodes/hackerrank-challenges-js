function sockMerchant(n, ar) {
	if (!ar || ar.length !== n) return 0

	let numberOfPairs = 0

	let sockTypeCount = new Map()

	for (let i in ar) {
		const sock = ar[i]

		if (!sockTypeCount.has(sock)) {
			sockTypeCount.set(sock, 1)
		} else {
			const newCount = sockTypeCount.get(sock) + i
			sockTypeCount.set(sock, newCount)
		}
	}

	for (let sock of sockTypeCount.keys()) {
		const pairs = sockTypeCount.get(sock)

		numberOfPairs += Math.floor(pairs / 2)
	}

	return numberOfPairs
}

sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20])
