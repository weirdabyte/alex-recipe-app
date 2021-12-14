export default {
  name: "chef",
  title: "Chef",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Chef's name",
      type: "string",
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "bio",
      type: "array",
      of: [
        {
          title: "block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
};
