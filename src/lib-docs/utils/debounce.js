/**
 * Creates a debounced version of a function that delays its execution
 * until after a specified delay has elapsed since the last time it was invoked.
 * @template {(...args: any[]) => unknown} T
 * @param {T} fn - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {(this: ThisParameterType<T>, ...args: Parameters<T>) => void} The debounced function
 */
export function debounce(fn, delay) {
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let timeoutId;

	return (
		/**
		 * @this {ThisParameterType<T>}
		 * @param {...Parameters<T>} args
		 */
		function (...args) {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => fn.apply(this, args), delay);
		}
	);
}
