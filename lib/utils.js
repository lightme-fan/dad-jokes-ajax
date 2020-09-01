export function randomItemFromArr(arr, not) {
	const item = arr[Math.floor(Math.random() * arr.length)];
	if (item === not) {
		return randomItemFromArr(arr, not);
	}
	return item
}
