let users = [
  {
    id: "22c30890-ae53-4a8e-831c-d3163d9f25af",
    firstName: "Bob",
    lastName: "Dole",
    transactionPermission: true,
  },
  {
    id: "3b4a1f17-f536-493c-abcd-c9e7e05edd26",
    firstName: "Bill",
    lastName: "Dingo",
    transactionPermission: true,
  },
  {
    id: "1d0d6a8c-27a1-40e3-a016-b2e80b88ef70",
    firstName: "Russel",
    lastName: "Coight",
    transactionPermission: true,
  },
];

export default class UserModel {
  constructor() {
    this.users = users;
  }

  findOne = async (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(users.find((user) => user.id === id));
      }, 1000);
    });
  };

  storeUser = async (user) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.users = [...users, user];
        res(user);
      }, 1000);
    });
  };
}
