'use client';

import { NetworkStatus } from '@apollo/client';
import { skipToken, useQuery } from '@apollo/client/react';

import { RepositoryCard } from '@/entities/repository/ui/RepositoryCard';
import {
  type RepositoryPreviewFieldsFragment,
  SearchRepositoriesDocument,
} from '@/shared/api/githubGraphql/generated';
import { Button } from '@/shared/ui/Button';
import { StatusMessage } from '@/shared/ui/StatusMessage';

import {
  Actions,
  RepositoryList,
  RepositoryListItem,
  ResultsCount,
  ResultsHeader,
  ResultsTitle,
  SearchField,
  SearchForm,
  SearchInput,
  SearchSection,
} from './styled';

const SEARCH_PAGE_SIZE = 10;

interface SearchRepositoriesProps {
  initialQuery: string;
}

export function SearchRepositories({ initialQuery }: SearchRepositoriesProps) {
  const { data, error, fetchMore, loading, networkStatus } = useQuery(
    SearchRepositoriesDocument,
    initialQuery
      ? {
          variables: {
            query: initialQuery,
            first: SEARCH_PAGE_SIZE,
            after: null,
          },
          ssr: false,
          notifyOnNetworkStatusChange: true,
        }
      : skipToken,
  );

  const repositories: RepositoryPreviewFieldsFragment[] =
    data?.search.nodes?.flatMap((node) =>
      node?.__typename === 'Repository' ? [node] : [],
    ) ?? [];

  const isLoadingMore = networkStatus === NetworkStatus.fetchMore;

  const isInitialLoading = loading && !isLoadingMore;

  const handleLoadMore = async () => {
    const pageInfo = data?.search.pageInfo;

    if (!pageInfo?.hasNextPage || !pageInfo.endCursor || isLoadingMore) {
      return;
    }

    await fetchMore({
      variables: {
        query: initialQuery,
        first: SEARCH_PAGE_SIZE,
        after: pageInfo.endCursor,
      },

      updateQuery(previousData, { fetchMoreResult }) {
        return {
          ...fetchMoreResult,
          search: {
            ...fetchMoreResult.search,
            nodes: [
              ...(previousData.search.nodes ?? []),
              ...(fetchMoreResult.search.nodes ?? []),
            ],
          },
        };
      },
    });
  };

  return (
    <SearchSection>
      <SearchForm action="/repositories">
        <SearchField>
          Search repositories
          <SearchInput
            defaultValue={initialQuery}
            name="query"
            placeholder="React, Next.js, GraphQL..."
            type="search"
          />
        </SearchField>

        <Button type="submit">Search</Button>
      </SearchForm>

      {!initialQuery && (
        <StatusMessage
          description="Enter a repository name, technology, or topic."
          title="Start searching"
        />
      )}

      {initialQuery && isInitialLoading && (
        <StatusMessage
          description="GitHub is searching for matching repositories."
          title="Loading repositories"
        />
      )}

      {initialQuery && error && (
        <StatusMessage
          description="Check the request and try again."
          title="Unable to search repositories"
        />
      )}

      {initialQuery && !isInitialLoading && !error && data && (
        <>
          <ResultsHeader>
            <ResultsTitle>Search results</ResultsTitle>

            <ResultsCount>
              {data.search.repositoryCount} repositories
            </ResultsCount>
          </ResultsHeader>

          {repositories.length > 0 ? (
            <RepositoryList>
              {repositories.map((repository) => (
                <RepositoryListItem key={repository.id}>
                  <RepositoryCard repository={repository} />
                </RepositoryListItem>
              ))}
            </RepositoryList>
          ) : (
            <StatusMessage
              description="Try changing the search phrase."
              title="No repositories found"
            />
          )}

          {data.search.pageInfo.hasNextPage && (
            <Actions>
              <Button
                disabled={isLoadingMore}
                onClick={handleLoadMore}
                type="button"
              >
                {isLoadingMore ? 'Loading...' : 'Load more'}
              </Button>
            </Actions>
          )}
        </>
      )}
    </SearchSection>
  );
}
