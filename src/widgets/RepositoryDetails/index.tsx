'use client';

import type { GetRepositoryQuery } from '@/shared/api/githubGraphql/generated';

import {
  Badge,
  Badges,
  Content,
  EmptyMessage,
  GitHubLink,
  Issue,
  IssueLink,
  IssueMetadata,
  IssuesCount,
  IssuesHeader,
  IssuesList,
  IssuesSection,
  IssuesTitle,
  Metadata,
  MetadataItem,
  MetadataLabel,
  MetadataValue,
  Overview,
  OverviewHeader,
  Stat,
  StatLabel,
  Stats,
  StatValue,
} from './styled';

interface RepositoryDetailsProps {
  repository: NonNullable<GetRepositoryQuery['repository']>;
}

function formatDate(value: string | null): string {
  if (!value) {
    return 'Not available';
  }

  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(value));
}

export function RepositoryDetails({ repository }: RepositoryDetailsProps) {
  const issues =
    repository.issues.nodes?.flatMap((issue) => (issue ? [issue] : [])) ?? [];

  return (
    <Content>
      <Overview>
        <OverviewHeader>
          <Badges>
            <Badge>{repository.visibility}</Badge>

            {repository.isArchived && <Badge>Archived</Badge>}

            {repository.isFork && <Badge>Fork</Badge>}
          </Badges>

          <GitHubLink href={repository.url} rel="noreferrer" target="_blank">
            Open on GitHub
          </GitHubLink>
        </OverviewHeader>

        <Stats>
          <Stat>
            <StatLabel>Stars</StatLabel>
            <StatValue>{repository.stargazerCount}</StatValue>
          </Stat>

          <Stat>
            <StatLabel>Forks</StatLabel>
            <StatValue>{repository.forkCount}</StatValue>
          </Stat>

          <Stat>
            <StatLabel>Watchers</StatLabel>
            <StatValue>{repository.watchers.totalCount}</StatValue>
          </Stat>

          <Stat>
            <StatLabel>Open issues</StatLabel>
            <StatValue>{repository.issues.totalCount}</StatValue>
          </Stat>
        </Stats>

        <Metadata>
          <MetadataItem>
            <MetadataLabel>Language</MetadataLabel>
            <MetadataValue>
              {repository.primaryLanguage?.name ?? 'Not specified'}
            </MetadataValue>
          </MetadataItem>

          <MetadataItem>
            <MetadataLabel>Default branch</MetadataLabel>
            <MetadataValue>
              {repository.defaultBranchRef?.name ?? 'Not available'}
            </MetadataValue>
          </MetadataItem>

          <MetadataItem>
            <MetadataLabel>License</MetadataLabel>
            <MetadataValue>
              {repository.licenseInfo?.spdxId ??
                repository.licenseInfo?.name ??
                'Not specified'}
            </MetadataValue>
          </MetadataItem>

          <MetadataItem>
            <MetadataLabel>Updated</MetadataLabel>
            <MetadataValue>{formatDate(repository.updatedAt)}</MetadataValue>
          </MetadataItem>
        </Metadata>
      </Overview>

      <IssuesSection>
        <IssuesHeader>
          <IssuesTitle>Open issues</IssuesTitle>

          <IssuesCount>{repository.issues.totalCount} issues</IssuesCount>
        </IssuesHeader>

        {issues.length > 0 ? (
          <IssuesList>
            {issues.map((issue) => (
              <Issue key={issue.id}>
                <IssueLink href={issue.url} rel="noreferrer" target="_blank">
                  #{issue.number} {issue.title}
                </IssueLink>

                <IssueMetadata>
                  Opened by {issue.author?.login ?? 'unknown'} ·{' '}
                  {issue.comments.totalCount} comments ·{' '}
                  {formatDate(issue.createdAt)}
                </IssueMetadata>
              </Issue>
            ))}
          </IssuesList>
        ) : (
          <EmptyMessage>This repository has no open issues.</EmptyMessage>
        )}
      </IssuesSection>
    </Content>
  );
}
