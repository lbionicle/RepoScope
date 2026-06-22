import { StatusMessage } from '@/shared/ui/StatusMessage';

export default function RepositoryNotFound() {
  return (
    <StatusMessage
      description="Check the repository address or your GitHub token permissions."
      title="Unable to find repository"
    />
  );
}
