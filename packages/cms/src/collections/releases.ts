import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const Releases: CollectionConfig = {
  slug: "releases",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      required: true,
      type: "text",
    },
    {
      name: "date",
      required: true,
      type: "date",
    },
    {
      name: "versionNumber",
      required: true,
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "contents",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("contents", { name: "contentsHTML" }),
  ],
};
