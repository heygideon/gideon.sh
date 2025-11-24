export function entriesOf<K extends string | number | symbol, T>(obj: Record<K, T>) {
	return Object.entries(obj) as [K, T][];
}
