const transactions = [
  {
    id: "83eaebfe-6241-4f27-9bb2-85add78e2fa7",
    userId: "22c30890-ae53-4a8e-831c-d3163d9f25af",
    walletId: "8552db50-2e99-445c-9888-8755886e77e1",
    createdAt: "2020-10-23T10:07:14.403Z",
    createdBy: "7b84a369-6053-4879-84f0-a057c079a09e",
    currency: "AUD",
    transactionStatus: "PENDING",
    transactionType: "deposit",
  },
  {
    id: "83eaebfe-6241-4f27-9bb2-85add78e2fa7",
    userId: "3b4a1f17-f536-493c-abcd-c9e7e05edd26",
    walletId: "f17613c4-e5ed-45c6-9692-f560ae99f17b",
    createdAt: "2020-10-23T10:07:14.403Z",
    createdBy: "7b84a369-6053-4879-84f0-a057c079a09e",
    currency: "AUD",
    transactionStatus: "PENDING",
    transactionType: "deposit",
  },
];

export default class TransactionModel {
  constructor() {
    this.transactions = transactions;
  }

  findOne = async (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.transactions.find((transaction) => transaction.id === id));
      }, 1000);
    });
  };

  getTransactionByUserID = async (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.transactions.find((transaction) => transaction.userId === id));
      }, 1000);
    });
  };

  saveTransaction = async (transaction) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.transactions = [...transactions, transaction];
        res(transaction);
      }, 1000);
    });
  };
}
