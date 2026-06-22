import {
  CreateIssueDocument,
  SearchRepositoriesDocument,
} from '@/shared/api/githubGraphql/generated';
import { githubGraphqlRequest } from '@/shared/api/githubGraphql/request';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function invalidVariables(): Response {
  return Response.json(
    {
      errors: [
        {
          message: 'Invalid GraphQL variables.',
        },
      ],
    },
    {
      status: 400,
    },
  );
}

export async function POST(request: Request): Promise<Response> {
  const requestBody: unknown = await request.json();

  if (!isRecord(requestBody) || !isRecord(requestBody.variables)) {
    return invalidVariables();
  }

  const { operationName, variables } = requestBody;

  try {
    if (operationName === 'SearchRepositories') {
      const { after, first, query } = variables;

      if (typeof query !== 'string' || typeof first !== 'number') {
        return invalidVariables();
      }

      const data = await githubGraphqlRequest(SearchRepositoriesDocument, {
        query: query.trim(),
        first,
        after: typeof after === 'string' ? after : null,
      });

      return Response.json({
        data,
      });
    }

    if (operationName === 'CreateIssue') {
      const { body: issueBody, repositoryId, title } = variables;

      if (
        typeof repositoryId !== 'string' ||
        typeof title !== 'string' ||
        !title.trim()
      ) {
        return invalidVariables();
      }

      const data = await githubGraphqlRequest(CreateIssueDocument, {
        repositoryId,
        title: title.trim(),
        body:
          typeof issueBody === 'string' && issueBody.trim()
            ? issueBody.trim()
            : null,
      });

      return Response.json({
        data,
      });
    }

    return Response.json(
      {
        errors: [
          {
            message: 'GraphQL operation is not allowed.',
          },
        ],
      },
      {
        status: 403,
      },
    );
  } catch (error) {
    console.error('GitHub GraphQL request failed:', error);

    return Response.json(
      {
        errors: [
          {
            message: 'GitHub GraphQL request could not be completed.',
          },
        ],
      },
      {
        status: 502,
      },
    );
  }
}
