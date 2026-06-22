'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client/react';
import type { SubmitEvent } from 'react';

import { CreateIssueDocument } from '@/shared/api/githubGraphql/generated';
import { Button } from '@/shared/ui/Button';

import {
  Actions,
  Description,
  ErrorMessage,
  Field,
  Form,
  Header,
  Input,
  IssueLink,
  Label,
  Section,
  SuccessMessage,
  Textarea,
  Title,
} from './styled';

interface CreateIssueProps {
  repositoryId: string;
}

export function CreateIssue({ repositoryId }: CreateIssueProps) {
  const router = useRouter();

  const [createIssue, { data, error, loading, reset }] =
    useMutation(CreateIssueDocument);

  const createdIssue = data?.createIssue?.issue;

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const title = formData.get('title');
    const bodyValue = formData.get('body');

    if (typeof title !== 'string' || !title.trim()) {
      return;
    }

    const body = typeof bodyValue === 'string' ? bodyValue.trim() : '';

    reset();

    void createIssue({
      variables: {
        repositoryId,
        title: title.trim(),
        body: body || null,
      },
      onCompleted(result) {
        if (!result.createIssue?.issue) {
          return;
        }

        form.reset();
        router.refresh();
      },
    });
  };

  return (
    <Section>
      <Header>
        <Title>Create issue</Title>

        <Description>Create a new issue in this GitHub repository.</Description>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Field>
          <Label>Title</Label>

          <Input
            disabled={loading}
            name="title"
            placeholder="Describe the problem"
            required
            type="text"
          />
        </Field>

        <Field>
          <Label>Description</Label>

          <Textarea
            disabled={loading}
            name="body"
            placeholder="Add more information about the issue..."
          />
        </Field>

        {error && (
          <ErrorMessage>
            The issue could not be created. Check your GitHub permissions and
            try again.
          </ErrorMessage>
        )}

        {createdIssue && (
          <SuccessMessage>
            Issue{' '}
            <IssueLink href={createdIssue.url} rel="noreferrer" target="_blank">
              #{createdIssue.number} {createdIssue.title}
            </IssueLink>{' '}
            was created.
          </SuccessMessage>
        )}

        <Actions>
          <Button disabled={loading} type="submit">
            {loading ? 'Creating...' : 'Create issue'}
          </Button>
        </Actions>
      </Form>
    </Section>
  );
}
