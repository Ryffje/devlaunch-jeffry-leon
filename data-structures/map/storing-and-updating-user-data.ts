interface User {
    id: number;
    name: string;
    email: string;
  }
   function manageUsers(users: Map<number, User>): void {
    const newUser: User = { id: 1, name: "Jeffry Leon", email: "jeffry@example.com" };
    users.set(newUser.id, newUser);
  
    if (users.has(newUser.id)) {
      const updatedUser = { ...users.get(newUser.id)!, name: "Jeffry Leon" };
      users.set(newUser.id, updatedUser);
}

    const retrievedUser = users.get(newUser.id);
    console.log(retrievedUser);
}

const users = new Map<number, User>();
manageUsers(users)
     