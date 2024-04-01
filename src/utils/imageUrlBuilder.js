import { sanityClient } from "@/lib/sanity.server";

import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  if (source) return builder.image(source);
};
export default urlFor;
