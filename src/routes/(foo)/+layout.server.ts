import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
    console.log('running foo layout')
    const foo = url.searchParams.get('foo')
	return {
        fooLayout: true,
        foo,
	};
};