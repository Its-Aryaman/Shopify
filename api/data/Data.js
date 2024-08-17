import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin",
    email: "admin@node.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@node.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false, // Explicitly setting isAdmin to false, though it's not strictly necessary
  },
];

export default users;
