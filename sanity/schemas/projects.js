export default {
  name: "projects",
  title: "Projects",
  type: "document",
  icon: () => "🚀",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Cover Image",
      type: "image",
    },
    {
      name: "dynamicImage",
      title: "Moving Image",
      type: "image",
      description: "Gif displayed on hover",
    },
    {
      name: "technologiesEmployed",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skills" }] }],
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
      description: "Url to github code",
    },
    {
      name: "previewLink",
      title: "Preview Link",
      type: "string",
      description: "Url to page preview",
    },
  ],
};
