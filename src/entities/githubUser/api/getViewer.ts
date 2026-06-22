import { GetViewerDocument } from '@/shared/api/githubGraphql/generated';
import { githubGraphqlRequest } from '@/shared/api/githubGraphql/request';

const DASHBOARD_REPOSITORIES_COUNT = 6;

export async function getViewer() {
  const data = await githubGraphqlRequest(GetViewerDocument, {
    repositoriesFirst: DASHBOARD_REPOSITORIES_COUNT,
  });

  if (!data.rateLimit) {
    throw new Error(
      'GitHub GraphQL response does not contain rate limit data.',
    );
  }

  return {
    viewer: data.viewer,
    rateLimit: data.rateLimit,
  };
}
