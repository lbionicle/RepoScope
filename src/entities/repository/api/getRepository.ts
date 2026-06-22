import { GetRepositoryDocument } from '@/shared/api/githubGraphql/generated';
import { githubGraphqlRequest } from '@/shared/api/githubGraphql/request';

const REPOSITORY_ISSUES_COUNT = 6;

export async function getRepository(owner: string, name: string) {
  const data = await githubGraphqlRequest(GetRepositoryDocument, {
    owner,
    name,
    issuesFirst: REPOSITORY_ISSUES_COUNT,
  });

  return data.repository;
}
