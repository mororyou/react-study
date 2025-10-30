import { cache, cacheSignal } from 'react';

const dedupedFetch = cache(fetch);

const JSON_SERVER_URL = 'http://localhost:3001';

const fetcher = async (path: string) => {
  const response = await fetch(`${JSON_SERVER_URL}${path}`);
  return response.json();
};

export const getUsers = cache(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1_000);
  });
  return await fetcher(`/users`);
});

export const nonCachedGetUsers = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1_000);
  });
  return await fetcher(`/users`);
};

export const getTodos = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1_000);
  });
  return await fetcher('/todos');
};
