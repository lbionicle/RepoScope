import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error('GITHUB_TOKEN is required for GraphQL code generation.');
}

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://api.github.com/graphql': {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      },
    },
  ],
  documents: ['src/**/*.graphql'],
  generates: {
    'src/shared/api/githubGraphql/generated.ts': {
      plugins: ['typescript-operations', 'typed-document-node'],
      config: {
        useTypeImports: true,
        enumType: 'string-literal',
        defaultScalarType: 'unknown',
        scalars: {
          DateTime: 'string',
          URI: 'string',
        },
      },
    },
  },
  ignoreNoDocuments: false,
};

export default config;
