import { useState } from "react";

type User = {
  id: string;
  email: string;
};

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  return;
}
