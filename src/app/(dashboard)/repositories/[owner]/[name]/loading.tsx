import { StatusMessage } from '@/shared/ui/StatusMessage';

export default function RepositoryLoading() {
  return (
    <StatusMessage
      description="GitHub repository data is being requested."
      title="Loading repository"
    />
  );
}
