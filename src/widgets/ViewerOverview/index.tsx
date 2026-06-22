'use client';

import type { GetViewerQuery } from '@/shared/api/githubGraphql/generated';

import {
  Avatar,
  Bio,
  Content,
  Identity,
  Login,
  Name,
  Overview,
  RateLimit,
  Stat,
  StatLabel,
  Stats,
  StatValue,
} from './styled';

interface ViewerOverviewProps {
  viewer: GetViewerQuery['viewer'];
  rateLimit: NonNullable<GetViewerQuery['rateLimit']>;
}

function formatResetAt(resetAt: string): string {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    month: 'short',
    timeZone: 'UTC',
  }).format(new Date(resetAt));
}

export function ViewerOverview({ viewer, rateLimit }: ViewerOverviewProps) {
  return (
    <Overview>
      <Avatar
        alt={`${viewer.login} avatar`}
        height={112}
        priority
        src={viewer.avatarUrl}
        width={112}
      />

      <Content>
        <Identity>
          <Name>{viewer.name ?? viewer.login}</Name>

          <Login href={viewer.url} rel="noreferrer" target="_blank">
            @{viewer.login}
          </Login>

          {viewer.bio && <Bio>{viewer.bio}</Bio>}
        </Identity>

        <Stats>
          <Stat>
            <StatLabel>Public repositories</StatLabel>
            <StatValue>{viewer.publicRepositories.totalCount}</StatValue>
          </Stat>

          <Stat>
            <StatLabel>Private repositories</StatLabel>
            <StatValue>{viewer.privateRepositories.totalCount}</StatValue>
          </Stat>

          <Stat>
            <StatLabel>Followers</StatLabel>
            <StatValue>{viewer.followers.totalCount}</StatValue>
          </Stat>

          <Stat>
            <StatLabel>Following</StatLabel>
            <StatValue>{viewer.following.totalCount}</StatValue>
          </Stat>

          <Stat>
            <StatLabel>API requests remaining</StatLabel>
            <StatValue>{rateLimit.remaining}</StatValue>
          </Stat>
        </Stats>

        <RateLimit>
          Current query cost: {rateLimit.cost}. Limit resets{' '}
          {formatResetAt(rateLimit.resetAt)}.
        </RateLimit>
      </Content>
    </Overview>
  );
}
