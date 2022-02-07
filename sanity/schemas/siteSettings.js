export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: () => `⚙️`,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "projects",
      title: "All projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projects" }] }],
    },
    {
      name: "frontend",
      title: "Frontend skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skills" }] }],
    },
    {
      name: "backend",
      title: "Backend skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skills" }] }],
    },
    {
      name: "miscellaneous",
      title: "Miscellaneous",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skills" }] }],
    },
  ],
};
