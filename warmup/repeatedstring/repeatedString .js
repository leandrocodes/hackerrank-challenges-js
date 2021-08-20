function repeatedString(s, n) {
	if (s === '') return 0

	if (s.length >= n) {
		s = s.substr(0, n)
		return s.match(/a/g)?.length || 0
	}

	const N_TIMES_BIGGER = Math.floor(n / s.length)
	console.log(N_TIMES_BIGGER)

	const N_OF_A_ALREADY_IN = s.match(/a/g)?.length * N_TIMES_BIGGER || 0
	console.log(N_OF_A_ALREADY_IN)

	const SLOTS_LEFT = n - N_TIMES_BIGGER * s.length
	console.log(SLOTS_LEFT)

	if (SLOTS_LEFT === 0) return N_OF_A_ALREADY_IN

	const N_OF_A_TO_PUT_IN = s.substr(0, SLOTS_LEFT).match(/a/g)?.length || 0
	console.log(N_OF_A_TO_PUT_IN)

	return N_OF_A_ALREADY_IN + N_OF_A_TO_PUT_IN
}

repeatedString('aba', 10)
