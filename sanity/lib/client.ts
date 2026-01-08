import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yv7h2z1p';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2023-05-03';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
