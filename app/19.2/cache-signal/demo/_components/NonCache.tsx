import { nonCachedGetUsers } from '@/hooks/fetcher';
import { User } from '@/types';
import { Suspense } from 'react';

export default async function NonCache() {
  const users = await nonCachedGetUsers();
  return (
    <div>
      <h1 className="text-lg font-bold text-gray-600">NonCache</h1>

      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
