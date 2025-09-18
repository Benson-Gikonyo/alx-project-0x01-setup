import React from "react";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const UserCard: React.FC<UserProps> = ({ id, name, email, phone }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
    </div>
  );
};

const UsersPage: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {users?.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
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

export default UsersPage;
