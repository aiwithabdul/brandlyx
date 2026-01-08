import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yv7h2z1p'; // Placeholder or user provided
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
    basePath: '/studio',
    name: 'Brandlyx_Studio',
    title: 'Brandlyx Agency Studio',
    projectId,
    dataset,
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});
