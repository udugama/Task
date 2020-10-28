# Binance Australia Technical Task

## Objective

This task sets out to understand and test your Javascript and Node ability, your ability to work with REST APIs and general approach to programming.

## Description of task

Using the Postman requests provided, your task is to write a function to be used in the root `index.js` with the `POST` route to `/transaction`. The function should be written in `/transaction/handler.js` and imported into `index.js`. Please keep in mind separation of concerns and writing functions that are isolated to as few actions as possible:

- Receives the request containing the transaction payload
  - Check the transaction doesn't exist and return a message if it does
- Fetch the user belonging to the transaction
  - Check the user exists
  - Check the user has permission to make transactions
  - Fail and return a message if the user fails any of these
- Fetch the wallet belonging to that user
  - Check the wallet is currently active
  - Check the wallet has enough balance
  - Fail and return a message if the wallet fails any of these
- Mark `transactionStatus` as 'COMPLETE'
- Save the transaction
- Return a success message if successful along with the newly created transaction, or a fail message if not

The `/lib` folder contains the models with the necessary functions and data for the task, these shouldn't be modified.

A successful response should look like:

```
{
    "status": "success",
    "body": {
        "id": "12fd24s34tg4tf2tws7s3",
        "amount": 2000,
        "userId": "22c30890-ae53-4a8e-831c-d3163d9f25af",
        "createdAt": "2020-10-23T10:07:14.403Z",
        "createdBy": "7b84a369-6053-4879-84f0-a057c079a09e",
        "currency": "AUD",
        "transactionType": "deposit"
        "transactionStatus": "COMPLETE"
    }
}
```

Failed responses should look like:

```
{
    "status": "fail",
    "body": {
        "message": "Wallet is inactive" // this message will change depending on error
    }
}
```

To start the server run `npm start`.

## Optional

- Tests

{
"id": "12fd24s34tg4tf2tws7s3",
"amount": 2000,
"userId": "22c30890-ae53-4a8e-831c-d3163d9f25af",
"createdAt": "2020-10-23T10:07:14.403Z",
"createdBy": "7b84a369-6053-4879-84f0-a057c079a09e",
"currency": "AUD",
"transactionType": "deposit"
}

{
"id": "12fd223r4tg4tf2tws7s3",
"amount": 2000,
"userId": "3b4a1f17-f536-493c-abcd-c9e7e05edd26",
"createdAt": "2020-10-23T10:07:14.403Z",
"createdBy": "7b84a369-6053-4879-84f0-a057c079a09e",
"currency": "AUD",
"transactionType": "deposit"
}

{
"id": "12js72s34tg4tf2twlqp9",
"amount": 2000,
"userId": "1d0d6a8c-27a1-40e3-a016-b2e80b88ef70",
"createdAt": "2020-10-23T10:07:14.403Z",
"createdBy": "7b84a369-6053-4879-84f0-a057c079a09e",
"currency": "AUD",
"transactionType": "deposit"
}
