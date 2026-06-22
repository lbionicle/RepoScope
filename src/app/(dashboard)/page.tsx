import type { Metadata } from 'next';

import { getViewer } from '@/entities/githubUser/api/getViewer';
import type {
  GetViewerQuery,
  RepositoryPreviewFieldsFragment,
} from '@/shared/api/githubGraphql/generated';
import { DashboardContent } from '@/widgets/DashboardContent';
import { RepositoryList } from '@/widgets/RepositoryList';
import { ViewerOverview } from '@/widgets/ViewerOverview';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Overview of your GitHub profile and repositories.',
};

type RepositoryNodes = GetViewerQuery['viewer']['publicRepositories']['nodes'];

function getRepositories(
  nodes: RepositoryNodes,
): RepositoryPreviewFieldsFragment[] {
  return nodes?.flatMap((repository) => (repository ? [repository] : [])) ?? [];
}

export default async function DashboardPage() {
  const { viewer, rateLimit } = await getViewer();

  const publicRepositories = getRepositories(viewer.publicRepositories.nodes);

  const privateRepositories = getRepositories(viewer.privateRepositories.nodes);

  return (
    <>
      <DashboardContent>
        <ViewerOverview rateLimit={rateLimit} viewer={viewer} />
        <RepositoryList
          count={viewer.publicRepositories.totalCount}
          repositories={publicRepositories}
          title="Public repositories"
        />
        <RepositoryList
          count={viewer.privateRepositories.totalCount}
          repositories={privateRepositories}
          title="Private repositories"
        />
      </DashboardContent>
    </>
  );
}
