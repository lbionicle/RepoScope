'use client';

import { RepositoryCard } from '@/entities/repository/ui/RepositoryCard';
import type { RepositoryPreviewFieldsFragment } from '@/shared/api/githubGraphql/generated';

import {
  Count,
  EmptyMessage,
  Header,
  List,
  ListItem,
  Section,
  Title,
} from './styled';

interface RepositoryListProps {
  title: string;
  count: number;
  repositories: RepositoryPreviewFieldsFragment[];
}

export function RepositoryList({
  title,
  count,
  repositories,
}: RepositoryListProps) {
  return (
    <Section>
      <Header>
        <Title>{title}</Title>
        <Count>{count} repositories</Count>
      </Header>

      {repositories.length > 0 ? (
        <List>
          {repositories.map((repository) => (
            <ListItem key={repository.id}>
              <RepositoryCard repository={repository} />
            </ListItem>
          ))}
        </List>
      ) : (
        <EmptyMessage>
          No repositories are available in this section.
        </EmptyMessage>
      )}
    </Section>
  );
}
