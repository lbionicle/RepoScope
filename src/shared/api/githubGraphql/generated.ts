/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
/** The possible states of an issue. */
export type IssueState =
  /** An issue that has been closed */
  | 'CLOSED'
  /** An issue that is still open */
  | 'OPEN';

/** The repository's visibility level. */
export type RepositoryVisibility =
  /** The repository is visible only to users in the same enterprise. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

export type GetViewerQueryVariables = Exact<{
  repositoriesFirst: number;
}>;

export type GetViewerQuery = {
  viewer: {
    id: string;
    login: string;
    name: string | null;
    bio: string | null;
    avatarUrl: string;
    url: string;
    followers: { totalCount: number };
    following: { totalCount: number };
    publicRepositories: {
      totalCount: number;
      nodes: Array<{
        id: string;
        nameWithOwner: string;
        description: string | null;
        url: string;
        visibility: RepositoryVisibility;
        isPrivate: boolean;
        updatedAt: string;
        stargazerCount: number;
        forkCount: number;
        primaryLanguage: { name: string; color: string | null } | null;
      } | null> | null;
    };
    privateRepositories: {
      totalCount: number;
      nodes: Array<{
        id: string;
        nameWithOwner: string;
        description: string | null;
        url: string;
        visibility: RepositoryVisibility;
        isPrivate: boolean;
        updatedAt: string;
        stargazerCount: number;
        forkCount: number;
        primaryLanguage: { name: string; color: string | null } | null;
      } | null> | null;
    };
  };
  rateLimit: {
    limit: number;
    cost: number;
    remaining: number;
    resetAt: string;
  } | null;
};

export type CreateIssueMutationVariables = Exact<{
  repositoryId: string | number;
  title: string;
  body?: string | null | undefined;
}>;

export type CreateIssueMutation = {
  createIssue: {
    issue: {
      id: string;
      number: number;
      title: string;
      url: string;
      state: IssueState;
      createdAt: string;
    } | null;
  } | null;
};

export type IssuePreviewFieldsFragment = {
  id: string;
  number: number;
  title: string;
  url: string;
  state: IssueState;
  createdAt: string;
  updatedAt: string;
  author:
    | { login: string; avatarUrl: string }
    | { login: string; avatarUrl: string }
    | { login: string; avatarUrl: string }
    | { login: string; avatarUrl: string }
    | { login: string; avatarUrl: string }
    | null;
  comments: { totalCount: number };
};

export type GetRepositoryQueryVariables = Exact<{
  owner: string;
  name: string;
  issuesFirst: number;
}>;

export type GetRepositoryQuery = {
  repository: {
    id: string;
    name: string;
    nameWithOwner: string;
    description: string | null;
    url: string;
    visibility: RepositoryVisibility;
    isPrivate: boolean;
    isArchived: boolean;
    isFork: boolean;
    createdAt: string;
    updatedAt: string;
    pushedAt: string | null;
    stargazerCount: number;
    forkCount: number;
    issues: {
      totalCount: number;
      nodes: Array<{
        id: string;
        number: number;
        title: string;
        url: string;
        state: IssueState;
        createdAt: string;
        updatedAt: string;
        author:
          | { login: string; avatarUrl: string }
          | { login: string; avatarUrl: string }
          | { login: string; avatarUrl: string }
          | { login: string; avatarUrl: string }
          | { login: string; avatarUrl: string }
          | null;
        comments: { totalCount: number };
      } | null> | null;
    };
    watchers: { totalCount: number };
    primaryLanguage: { name: string; color: string | null } | null;
    defaultBranchRef: { name: string } | null;
    licenseInfo: { name: string; spdxId: string | null } | null;
    owner:
      | { login: string; avatarUrl: string }
      | { login: string; avatarUrl: string };
  } | null;
};

export type RepositoryDetailsFieldsFragment = {
  id: string;
  name: string;
  nameWithOwner: string;
  description: string | null;
  url: string;
  visibility: RepositoryVisibility;
  isPrivate: boolean;
  isArchived: boolean;
  isFork: boolean;
  createdAt: string;
  updatedAt: string;
  pushedAt: string | null;
  stargazerCount: number;
  forkCount: number;
  watchers: { totalCount: number };
  primaryLanguage: { name: string; color: string | null } | null;
  defaultBranchRef: { name: string } | null;
  licenseInfo: { name: string; spdxId: string | null } | null;
  owner:
    | { login: string; avatarUrl: string }
    | { login: string; avatarUrl: string };
};

export type RepositoryPreviewFieldsFragment = {
  id: string;
  nameWithOwner: string;
  description: string | null;
  url: string;
  visibility: RepositoryVisibility;
  isPrivate: boolean;
  updatedAt: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: { name: string; color: string | null } | null;
};

export type SearchRepositoriesQueryVariables = Exact<{
  query: string;
  first: number;
  after?: string | null | undefined;
}>;

export type SearchRepositoriesQuery = {
  search: {
    repositoryCount: number;
    nodes: Array<
      | { __typename: 'App' }
      | { __typename: 'Discussion' }
      | { __typename: 'Issue' }
      | { __typename: 'MarketplaceListing' }
      | { __typename: 'Organization' }
      | { __typename: 'PullRequest' }
      | {
          __typename: 'Repository';
          id: string;
          nameWithOwner: string;
          description: string | null;
          url: string;
          visibility: RepositoryVisibility;
          isPrivate: boolean;
          updatedAt: string;
          stargazerCount: number;
          forkCount: number;
          primaryLanguage: { name: string; color: string | null } | null;
        }
      | { __typename: 'User' }
      | null
    > | null;
    pageInfo: { endCursor: string | null; hasNextPage: boolean };
  };
};

export const IssuePreviewFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'IssuePreviewFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Issue' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'author' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'login' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarUrl' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'comments' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IssuePreviewFieldsFragment, unknown>;
export const RepositoryDetailsFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RepositoryDetailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Repository' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nameWithOwner' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPrivate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFork' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pushedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stargazerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'forkCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'watchers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'primaryLanguage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'defaultBranchRef' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'licenseInfo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'spdxId' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'login' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarUrl' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RepositoryDetailsFieldsFragment, unknown>;
export const RepositoryPreviewFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RepositoryPreviewFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Repository' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nameWithOwner' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPrivate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stargazerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'forkCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'primaryLanguage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RepositoryPreviewFieldsFragment, unknown>;
export const GetViewerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetViewer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'repositoriesFirst' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'viewer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'login' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'followers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'following' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'publicRepositories' },
                  name: { kind: 'Name', value: 'repositories' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'repositoriesFirst' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'affiliations' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          { kind: 'EnumValue', value: 'OWNER' },
                          { kind: 'EnumValue', value: 'COLLABORATOR' },
                          { kind: 'EnumValue', value: 'ORGANIZATION_MEMBER' },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'privacy' },
                      value: { kind: 'EnumValue', value: 'PUBLIC' },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'orderBy' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'field' },
                            value: { kind: 'EnumValue', value: 'UPDATED_AT' },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'direction' },
                            value: { kind: 'EnumValue', value: 'DESC' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'RepositoryPreviewFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'privateRepositories' },
                  name: { kind: 'Name', value: 'repositories' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'repositoriesFirst' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'affiliations' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          { kind: 'EnumValue', value: 'OWNER' },
                          { kind: 'EnumValue', value: 'COLLABORATOR' },
                          { kind: 'EnumValue', value: 'ORGANIZATION_MEMBER' },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'privacy' },
                      value: { kind: 'EnumValue', value: 'PRIVATE' },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'orderBy' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'field' },
                            value: { kind: 'EnumValue', value: 'UPDATED_AT' },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'direction' },
                            value: { kind: 'EnumValue', value: 'DESC' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'RepositoryPreviewFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rateLimit' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'limit' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                { kind: 'Field', name: { kind: 'Name', value: 'remaining' } },
                { kind: 'Field', name: { kind: 'Name', value: 'resetAt' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RepositoryPreviewFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Repository' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nameWithOwner' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPrivate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stargazerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'forkCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'primaryLanguage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetViewerQuery, GetViewerQueryVariables>;
export const CreateIssueDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateIssue' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'repositoryId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'title' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'body' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createIssue' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'repositoryId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'repositoryId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'title' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'title' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'body' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'body' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'issue' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'number' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateIssueMutation, CreateIssueMutationVariables>;
export const GetRepositoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRepository' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'owner' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'issuesFirst' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'repository' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'owner' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'owner' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'name' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'RepositoryDetailsFields' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'issues' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'issuesFirst' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'states' },
                      value: { kind: 'EnumValue', value: 'OPEN' },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'orderBy' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'field' },
                            value: { kind: 'EnumValue', value: 'UPDATED_AT' },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'direction' },
                            value: { kind: 'EnumValue', value: 'DESC' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'IssuePreviewFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RepositoryDetailsFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Repository' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nameWithOwner' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPrivate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFork' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pushedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stargazerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'forkCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'watchers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'primaryLanguage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'defaultBranchRef' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'licenseInfo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'spdxId' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'login' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarUrl' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'IssuePreviewFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Issue' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'author' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'login' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarUrl' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'comments' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetRepositoryQuery, GetRepositoryQueryVariables>;
export const SearchRepositoriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchRepositories' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'query' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'search' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'query' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'query' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'type' },
                value: { kind: 'EnumValue', value: 'REPOSITORY' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'after' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'repositoryCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'Repository' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'RepositoryPreviewFields',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RepositoryPreviewFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Repository' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nameWithOwner' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPrivate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stargazerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'forkCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'primaryLanguage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SearchRepositoriesQuery,
  SearchRepositoriesQueryVariables
>;
