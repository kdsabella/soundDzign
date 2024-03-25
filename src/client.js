import sanityClient, { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: 'production',
    appVersion:'2024-03-25',
    token: import.meta.env.VITE_PROJECT_TOKEN,
    useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) =>{
    return builder.image(source);
}