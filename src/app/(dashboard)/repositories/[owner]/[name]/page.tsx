import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getRepository } from '@/entities/repository/api/getRepository';
import { CreateIssue } from '@/features/createIssue';
import { RepositoryDetails } from '@/widgets/RepositoryDetails';
import { RepositoryHeader } from '@/widgets/RepositoryHeader';

interface RepositoryPageProps {
  params: Promise<{
    owner: string;
    name: string;
  }>;
}

export async function generateMetadata({
  params,
}: RepositoryPageProps): Promise<Metadata> {
  const { name, owner } = await params;

  return {
    title: `${owner}/${name}`,
    description: `GitHub repository details for ${owner}/${name}.`,
  };
}

export default async function RepositoryPage({ params }: RepositoryPageProps) {
  const { name, owner } = await params;

  const repository = await getRepository(owner, name);

  if (!repository) {
    notFound();
  }

  return (
    <>
      <RepositoryHeader
        description={
          repository.description ??
          'This repository does not have a description.'
        }
        title={repository.nameWithOwner}
      />
      <RepositoryDetails repository={repository} />
      <CreateIssue repositoryId={repository.id} />
    </>
  );
}
