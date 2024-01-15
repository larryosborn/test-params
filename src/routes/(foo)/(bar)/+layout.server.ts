import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
console.log('running bar layout')
    const bar = url.searchParams.get('bar')
	return {
        barLayout: true,
        bar,
	};
};