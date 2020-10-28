const wallets = [
  {
    id: "8552db50-2e99-445c-9888-8755886e77e1",
    userId: "22c30890-ae53-4a8e-831c-d3163d9f25af",
    status: "ACTIVE",
    balance: 50000,
  },
  {
    id: "f17613c4-e5ed-45c6-9692-f560ae99f17b",
    userId: "3b4a1f17-f536-493c-abcd-c9e7e05edd26",
    status: "ACTIVE",
    balance: 12,
  },
  {
    id: "4bf60c66-35dd-463a-95c5-5b8d7aad9bbe",
    userId: "1d0d6a8c-27a1-40e3-a016-b2e80b88ef70",
    status: "INACTIVE",
    balance: 12000,
  },
];

export default class WalletModel {
  constructor() {
    this.wallets = wallets;
  }

  getWalletByID = async (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.wallets.find((wallet) => wallet.id === id));
      }, 1000);
    });
  };

  getWalletByUserID = async (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.wallets.find((wallet) => wallet.userId === id));
      }, 1000);
    });
  };
}
