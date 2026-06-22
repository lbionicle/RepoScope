'use client';

import type { RepositoryPreviewFieldsFragment } from '@/shared/api/githubGraphql/generated';

import {
  Card,
  Description,
  Header,
  Language,
  Metadata,
  MetadataItem,
  RepositoryLink,
  Visibility,
} from './styled';

interface RepositoryCardProps {
  repository: RepositoryPreviewFieldsFragment;
}

function formatUpdatedAt(updatedAt: string): string {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(updatedAt));
}

function getRepositoryHref(nameWithOwner: string): string {
  return `/repositories/${nameWithOwner
    .split('/')
    .map(encodeURIComponent)
    .join('/')}`;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Card>
      <Header>
        <RepositoryLink
          href={getRepositoryHref(repository.nameWithOwner)}
          rel="noreferrer"
          target="_blank"
        >
          {repository.nameWithOwner}
        </RepositoryLink>

        <Visibility $private={repository.isPrivate}>
          {repository.isPrivate ? 'Private' : 'Public'}
        </Visibility>
      </Header>

      <Description>
        {repository.description ?? 'No description provided.'}
      </Description>

      <Metadata>
        {repository.primaryLanguage && (
          <MetadataItem>
            <Language>{repository.primaryLanguage.name}</Language>
          </MetadataItem>
        )}

        <MetadataItem>{repository.stargazerCount} stars</MetadataItem>

        <MetadataItem>{repository.forkCount} forks</MetadataItem>

        <MetadataItem>
          Updated {formatUpdatedAt(repository.updatedAt)}
        </MetadataItem>
      </Metadata>
    </Card>
  );
}
