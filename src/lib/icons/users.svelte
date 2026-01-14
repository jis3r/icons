<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [color]
	 * @property {number} [size]
	 * @property {number} [strokeWidth]
	 * @property {boolean} [isHovered]
	 * @property {string} [class]
	 */

	/** @type {Props} */
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		isHovered = false,
		class: className = ''
	} = $props();

	function handleMouseEnter() {
		isHovered = true;

		setTimeout(() => {
			isHovered = false;
		}, 700);
	}
</script>

<div class={className} aria-label="users" role="img" onmouseenter={handleMouseEnter}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
		class="users-icon"
		class:animate={isHovered}
	>
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" class="users-path1" />
		<path d="M16 3.128a4 4 0 0 1 0 7.744" class="users-path2" />
		<path d="M22 21v-2a4 4 0 0 0-3-3.87" class="users-path3" />
		<circle cx={9} cy={7} r={4} class="users-circle" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}

	.users-path1,
	.users-path2,
	.users-path3,
	.users-circle {
		transition: transform 0.6s ease-in-out;
	}

	.users-icon.animate .users-path1 {
		animation: path1Bounce 0.6s ease-in-out;
		animation-delay: 0.1s;
	}

	.users-icon.animate .users-path2 {
		animation: path2Bounce 0.6s ease-in-out;
	}

	.users-icon.animate .users-path3 {
		animation: path3Bounce 0.6s ease-in-out;
	}

	.users-icon.animate .users-circle {
		animation: circleBounce 0.6s ease-in-out;
		animation-delay: 0.1s;
	}

	@keyframes path1Bounce {
		0% {
			transform: translateY(0);
		}
		33% {
			transform: translateY(2px);
		}
		66% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes path2Bounce {
		0% {
			transform: translateY(0);
		}
		33% {
			transform: translateY(4px);
		}
		66% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes path3Bounce {
		0% {
			transform: translateY(0);
		}
		33% {
			transform: translateY(2px);
		}
		66% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes circleBounce {
		0% {
			transform: translateY(0);
		}
		33% {
			transform: translateY(4px);
		}
		66% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
