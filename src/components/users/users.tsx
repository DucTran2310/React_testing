import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        console.log('Fetched data:', data); // Log fetched data to inspect its structure
        setUsers(data.map((user: { name: string }) => user.name));
      } catch (error) {
        setError('Error fetching users');
      }
    };

    fetchData();
  }, []);

  console.log('Users:', users); // Log users array to inspect its contents

  return (
    <div>
      <h1>Users</h1>
      {error ? (
          <p>{error}</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
