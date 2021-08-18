function sockMerchant(n, arr) {
	const socksHashMap = {}
	let pairs = 0

	arr.forEach(sockColor => {
		if (!socksHashMap[sockColor]) {
			socksHashMap[sockColor] = 1
			return
		}
		pairs++
		delete socksHashMap[sockColor]
	})

	console.log(pairs)
	return pairs
}

sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20])
