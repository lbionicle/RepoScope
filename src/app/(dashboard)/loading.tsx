'use client';

import { StatusMessage } from '@/shared/ui/StatusMessage';

export default function DashboardLoading() {
  return (
    <StatusMessage
      description="GitHub data is being requested."
      title="Loading dashboard"
    />
  );
}
