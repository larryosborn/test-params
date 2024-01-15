import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
    console.log('running base layout')
    const base = url.searchParams.get('base')
	return {
        baseLayout: true,
        base,
	};
};