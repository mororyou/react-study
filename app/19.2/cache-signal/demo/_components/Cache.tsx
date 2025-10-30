import { getUsers } from '@/hooks/fetcher';
import { User } from '@/types';

export default async function Cache() {
  const users = await getUsers();
  return (
    <div>
      <h1 className="text-lg font-bold text-gray-600">Cache</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
