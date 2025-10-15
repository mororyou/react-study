let cache = new Map();

export function fetchData(url: string) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url: string) {
  if (url.startsWith('/posts')) {
    return await getPosts();
  } else {
    throw Error('Not implemented');
  }
}

export async function getPosts() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1_000);
  });

  const tasks = await fetch('https://jsonplaceholder.typicode.com/todos');
  return await tasks.json();
}

export type Task = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};
