import { useState } from "react";

type User = {
  id: string;
  email: string;
};

export function UsersPage() {
  return (
    <main className="container mx-auto p-4 pt-10 flex flex-col gap-4">
      <h1 className="text-3xl font-bold underline">Users</h1>
      <section>
        <form className="flex gap-2 mb-5">
          <input
            className="border p-2 rounded"
            type="email"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold oy-2 px-4 rounded"
            type="submit"
          >
            Add
          </button>
        </form>
      </section>
      <section>
        <UsersList
          users={[
            { id: "1", email: "admin@mail.ru" },
            { id: "2", email: "pavel@mail.ru" },
          ]}
        />
      </section>
    </main>
  );
}

export function UsersList({ users }: { users: User[] }) {
  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export function UserCard({ user }: { user: User }) {
  return (
    <div className="border p-2  rounded bg-gray-100 mb-3 flex gap-2">
      {user.email}
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto"
        type="button"
      >
        Delete
      </button>
    </div>
  );
}
