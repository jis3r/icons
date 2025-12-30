/**
 * Creates a debounced version of a function that delays its execution
 * until after a specified delay has elapsed since the last time it was invoked.
 * @template {(...args: unknown[]) => unknown} T
 * @param {T} fn - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {T} The debounced function
 */
export function debounce(fn, delay) {
	/** @type {ReturnType<typeof setTimeout>} */
	let timeoutId;

	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), delay);
	};
}
