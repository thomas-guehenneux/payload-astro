import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "node:path";
import { buildConfig } from "payload";
import { fileURLToPath } from "node:url";
import { Users } from "./collections/users";
import { Media } from "./collections/media";
import { Releases } from "./collections/releases";
import { s3Storage } from "@payloadcms/storage-s3";
import { Resource } from "sst";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Releases],
  editor: lexicalEditor(),
  secret: "blaaa",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: `postgresql://${Resource.MyDatabase.username}:${Resource.MyDatabase.password}@${Resource.MyDatabase.host}/${Resource.MyDatabase.database}`,
    },
  }),
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          s3Storage({
            collections: {
              media: {
                generateFileURL: ({ filename }) => {
                  return `/${filename}`;
                },
              },
            },
            bucket: Resource.FileStorage.name,
            config: {},
          }),
        ]
      : [],
});
