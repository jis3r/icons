import type { Handle } from '@sveltejs/kit/hooks';
import { generateSetInitialModeExpression } from 'mode-watcher';

const setInitialModeExpression = generateSetInitialModeExpression();

export const handle: Handle = ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%modewatcher.snippet%', () => setInitialModeExpression)
	});
};
