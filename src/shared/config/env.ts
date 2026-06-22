import 'server-only';

const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error('GITHUB_TOKEN environment variable is required.');
}

export const serverEnv = {
  githubToken,
} as const;
