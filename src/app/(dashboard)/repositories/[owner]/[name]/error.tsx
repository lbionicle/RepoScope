'use client';

import { Button } from '@/shared/ui/Button';
import { StatusMessage } from '@/shared/ui/StatusMessage';

interface RepositoryErrorProps {
  reset: () => void;
}

export default function RepositoryError({ reset }: RepositoryErrorProps) {
  return (
    <StatusMessage
      description="Try requesting the repository again."
      title="Unable to load repository"
    >
      <Button onClick={reset}>Try again</Button>
    </StatusMessage>
  );
}
