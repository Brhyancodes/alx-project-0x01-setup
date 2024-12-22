import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import React, { useState } from "react";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  console.log(posts);
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (user: UserData) => {
    setUser({ ...user, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts.map((post: UserProps, key: number) => (
            <UserCard {...post} key={key} />
          ))}
        </div>
        {isModalOpen && (
          <UserModal
            onClose={() => setModalOpen(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
export default Users;