import 'server-only';

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';

import { serverEnv } from '@/shared/config/env';

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

interface GraphQLErrorData {
  message: string;
}

interface GraphQLResponse<Data> {
  data?: Data;
  errors?: GraphQLErrorData[];
}

export async function githubGraphqlRequest<
  Data,
  Variables extends Record<string, unknown>,
>(
  document: TypedDocumentNode<Data, Variables>,
  variables: Variables,
): Promise<Data> {
  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${serverEnv.githubToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: print(document),
      variables,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(
      `GitHub GraphQL request failed with status ${response.status}.`,
    );
  }

  const result = (await response.json()) as GraphQLResponse<Data>;

  if (result.errors?.length) {
    throw new Error(result.errors.map(({ message }) => message).join('\n'));
  }

  if (!result.data) {
    throw new Error('GitHub GraphQL response does not contain data.');
  }

  return result.data;
}
