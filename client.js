import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "idug9s1o",
  dataset: "production",
  useCdn: true,
});
