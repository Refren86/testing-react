import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <div data-testid='users-page'>
      <ul>
        {users.length > 0 &&
          users.map((user, idx) => (
            <li key={idx}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
