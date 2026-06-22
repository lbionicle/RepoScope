'use client';

import { Button } from '@/shared/ui/Button';
import { StatusMessage } from '@/shared/ui/StatusMessage';

interface DashboardErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function DashboardError({ reset }: DashboardErrorProps) {
  return (
    <StatusMessage
      description="Check the token permissions and try the request again."
      title="Unable to load dashboard"
    >
      <Button onClick={reset}>Try again</Button>
    </StatusMessage>
  );
}
