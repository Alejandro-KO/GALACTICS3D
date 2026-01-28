import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'u9syn970',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-11',
});

const builder = imageUrlBuilder(client);

export function urlFor(source){
    return builder.image(source);
}