import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'yafyx4d9',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token:
    'skinLFN1cYkhv2sqnEOjdH6rLycmfyU8iu4Bq3r2miyJ92eup1l8CD8C9cVr86NuyQJyoBWPVX5U3D8pnL6vZCwHjFnAZTGZ37TBrzkUnurANjl3GPVf9fBmeSlhbdNCrwI7TYr4rvhpgyGDCFLfOprRrywfzzMy394b52iS6r0DztyvEUrI',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
