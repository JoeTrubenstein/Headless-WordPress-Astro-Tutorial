// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      // replace with your own WordpPress GraphQL endpoint
      'https:/{my-awsome-wordpress-site}/graphql': {
        headers: {
          Authorization: import.meta.env.GRAPHQL_PASSWORD
        },
      },
    },
  ],
  generates: {
    "src/graphql/schematypes.ts": {
      plugins: ["typescript"]
    },
    "src/graphql/schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;