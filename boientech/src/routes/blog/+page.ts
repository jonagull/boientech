import type { PageLoad } from "./$types";

export const load = (async () => {
    const lol = "data";

    return {
        boi: lol,
    };
}) satisfies PageLoad;
