type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function updateUser(id: number, updates: Partial<User>) {
  console.log(`Updating user ${id} with`, updates);
}

updateUser(1, { name: "Bob" });
