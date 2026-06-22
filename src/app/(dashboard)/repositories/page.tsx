import type { Metadata } from 'next';

import { SearchRepositories } from '@/features/searchRepositories';

export const metadata: Metadata = {
  title: 'Repositories',
  description: 'Search and explore public GitHub repositories.',
};

interface RepositoriesPageProps {
  searchParams: Promise<{
    query?: string | string[];
  }>;
}

export default async function RepositoriesPage({
  searchParams,
}: RepositoriesPageProps) {
  const { query } = await searchParams;

  const initialQuery = typeof query === 'string' ? query.trim() : '';

  return <SearchRepositories initialQuery={initialQuery} key={initialQuery} />;
}
