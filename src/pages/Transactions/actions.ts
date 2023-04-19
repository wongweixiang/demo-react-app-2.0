export const fetchTransactions = () => ({
  type: "FETCH_TRANSACTIONS",
  transactions: [
    {
      id: "x202399000",
      createdAt: "2022-11-09T17:19:18.000Z",
      type: "Bank Transfer Out",
      amount: {
        direction: "-",
        currency: "USD",
        netAmount: "$100.00",
      },
      status: "pending",
    },
    {
      id: "x202398000",
      createdAt: "2022-11-05T15:19:18.000Z",
      type: "Payment Received",
      amount: {
        direction: "+",
        currency: "SGD",
        netAmount: "$250.00",
      },
      status: "completed",
    },
    {
      id: "x202396000",
      createdAt: "2022-10-28T23:20:18.000Z",
      type: "Payment Received",
      amount: {
        direction: "+",
        currency: "USD",
        netAmount: "$150.00",
      },
      status: "completed",
    },
    {
      id: "x202391000",
      createdAt: "2022-10-21T10:12:18.000Z",
      type: "Payment Sent",
      amount: {
        direction: "-",
        currency: "SGD",
        netAmount: "$592.45",
      },
      status: "cancelled",
    },
    {
      id: "x202387000",
      createdAt: "2022-10-20T18:45:18.000Z",
      type: "Bank Transfer In",
      amount: {
        direction: "+",
        currency: "SGD",
        netAmount: "$183.90",
      },
      status: "completed",
    },
    {
      id: "x202375000",
      createdAt: "2022-10-19T19:40:18.000Z",
      type: "Bank Transfer In",
      amount: {
        direction: "+",
        currency: "SGD",
        netAmount: "$99.90",
      },
      status: "cancelled",
    },
    {
      id: "x202371000",
      createdAt: "2022-10-11T15:15:18.000Z",
      type: "Payment Received",
      amount: {
        direction: "+",
        currency: "USD",
        netAmount: "$420.55",
      },
      status: "completed",
    },
    {
      id: "x202369000",
      createdAt: "2022-10-05T12:32:18.000Z",
      type: "Bank Transfer Out",
      amount: {
        direction: "-",
        currency: "SGD",
        netAmount: "$123.00",
      },
      status: "completed",
    },
    {
      id: "x202387000",
      createdAt: "2022-10-02T18:45:18.000Z",
      type: "Bank Transfer In",
      amount: {
        direction: "+",
        currency: "USD",
        netAmount: "$15.00",
      },
      status: "expired",
    },
    {
      id: "x202387000",
      createdAt: "2022-09-18T17:05:18.000Z",
      type: "Bank Transfer In",
      amount: {
        direction: "+",
        currency: "USD",
        netAmount: "$55.00",
      },
      status: "expired",
    },
    {
      id: "x202387000",
      createdAt: "2022-09-12T10:12:18.000Z",
      type: "Bank Transfer In",
      amount: {
        direction: "+",
        currency: "SGD",
        netAmount: "$997.00",
      },
      status: "completed",
    },
    {
      id: "x202387000",
      createdAt: "2022-09-08T15:53:18.000Z",
      type: "Bank Transfer In",
      amount: {
        direction: "+",
        currency: "USD",
        netAmount: "$880.00",
      },
      status: "completed",
    },
  ],
});
