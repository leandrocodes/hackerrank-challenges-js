function sockMerchant(n, arr) {
	const socksByColor = arr.reduce((acc, sockColor) => {
		if (!acc[sockColor]) {
			acc[sockColor] = 0
		}
		acc[sockColor] = acc[sockColor] + 1
		return acc
	}, {})

	const pairs = Object.keys(socksByColor).reduce((count, sock) => {
		const sockCount = socksByColor[sock]
		const pairsCount = Math.floor(sockCount / 2)
		return count + pairsCount
	}, 0)
	console.log(pairs)
	return pairs
}

sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20])
