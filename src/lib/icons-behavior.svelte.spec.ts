import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount, unmount, flushSync } from 'svelte';
import Bell from './icons/bell.svelte';
import Frame from './icons/frame.svelte';

// These tests exercise the `animate` prop contract itself (not just markup/defaults,
// which icons.spec.ts already covers): the prop must stay reliably parent-controllable,
// and self-triggered hover animation must never clobber a parent-driven value.
//
// Bell represents the "timer" family (setTimeout-based self-reset).
// Frame represents the "hover-hold" family (mouseenter/mouseleave, no timer).

describe('animate prop contract', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	describe('Bell (timer family)', () => {
		it('is externally controllable: parent animate=true shows the class, false hides it', () => {
			const props = $state({ animate: true });
			const target = document.createElement('div');
			const instance = mount(Bell, { target, props });
			flushSync();

			expect(target.querySelector('svg')!.classList.contains('animate-svg')).toBe(true);

			props.animate = false;
			flushSync();

			expect(target.querySelector('svg')!.classList.contains('animate-svg')).toBe(false);

			unmount(instance);
		});

		it('does not get stuck when the parent sets animate=true while a self-triggered hover timer is pending (race regression)', () => {
			const props = $state({ animate: false });
			const target = document.createElement('div');
			const instance = mount(Bell, { target, props });
			flushSync();

			const wrapper = target.querySelector('div[role="img"]')!;

			// Pointer grazes the icon: arms the 1100ms self-reset timer.
			wrapper.dispatchEvent(new MouseEvent('mouseenter'));
			flushSync();
			expect(target.querySelector('svg')!.classList.contains('animate-svg')).toBe(true);

			// Partway through the timer window, the parent takes control.
			vi.advanceTimersByTime(500);
			props.animate = true;
			flushSync();

			// Advance past the self-reset timer's original 1100ms deadline.
			vi.advanceTimersByTime(700);
			flushSync();

			// The parent still says true, so the icon must still be animating,
			// even though the self-triggered timer fired and tried to reset it.
			expect(target.querySelector('svg')!.classList.contains('animate-svg')).toBe(true);

			// Parent releases control -> animation stops.
			props.animate = false;
			flushSync();
			expect(target.querySelector('svg')!.classList.contains('animate-svg')).toBe(false);

			unmount(instance);
		});

		it('self-hover animates and resets, and can be retriggered', () => {
			const props = $state({ animate: false });
			const target = document.createElement('div');
			const instance = mount(Bell, { target, props });
			flushSync();

			const wrapper = target.querySelector('div[role="img"]')!;

			wrapper.dispatchEvent(new MouseEvent('mouseenter'));
			flushSync();
			expect(target.querySelector('svg')!.classList.contains('animate-svg')).toBe(true);

			vi.advanceTimersByTime(1100);
			flushSync();
			expect(target.querySelector('svg')!.classList.contains('animate-svg')).toBe(false);

			// second cycle works too
			wrapper.dispatchEvent(new MouseEvent('mouseenter'));
			flushSync();
			expect(target.querySelector('svg')!.classList.contains('animate-svg')).toBe(true);

			vi.advanceTimersByTime(1100);
			flushSync();
			expect(target.querySelector('svg')!.classList.contains('animate-svg')).toBe(false);

			unmount(instance);
		});
	});

	describe('Frame (hover-hold family)', () => {
		it('activates on mouseenter and deactivates on mouseleave', () => {
			const props = $state({ animate: false });
			const target = document.createElement('div');
			const instance = mount(Frame, { target, props });
			flushSync();

			const wrapper = target.querySelector('div[role="img"]')!;
			const firstLine = target.querySelector('svg line')!;

			expect(firstLine.classList.contains('animate-line')).toBe(false);

			wrapper.dispatchEvent(new MouseEvent('mouseenter'));
			flushSync();
			expect(firstLine.classList.contains('animate-line')).toBe(true);
			expect(firstLine.getAttribute('style')).toContain('translateY(-4px)');

			wrapper.dispatchEvent(new MouseEvent('mouseleave'));
			flushSync();
			expect(firstLine.classList.contains('animate-line')).toBe(false);

			unmount(instance);
		});

		it('stays active across a self-hover enter+leave cycle when the parent sets animate=true', () => {
			const props = $state({ animate: true });
			const target = document.createElement('div');
			const instance = mount(Frame, { target, props });
			flushSync();

			const wrapper = target.querySelector('div[role="img"]')!;
			const firstLine = target.querySelector('svg line')!;

			expect(firstLine.classList.contains('animate-line')).toBe(true);

			wrapper.dispatchEvent(new MouseEvent('mouseenter'));
			flushSync();
			expect(firstLine.classList.contains('animate-line')).toBe(true);

			wrapper.dispatchEvent(new MouseEvent('mouseleave'));
			flushSync();
			// parent still says true, so it must remain active despite the leave
			expect(firstLine.classList.contains('animate-line')).toBe(true);

			unmount(instance);
		});
	});
});
