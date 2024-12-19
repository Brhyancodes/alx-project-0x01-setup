import React from 'react';
import UserCard from '../components/common/UserCard'; // Adjust the import path as necessary
import { UserProps } from '@/pages/interfaces'; // Adjust the import path as necessary

interface UsersProps {
  users: UserProps[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <UserCard key={user.id} {...user} /> 
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;