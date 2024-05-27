export const getTransactionsResolver = (req, res, ctx) => {
  const transactionID = req.url.searchParams.get("transactionID");
  const status = req.url.searchParams.get("status");
  const transactionType = req.url.searchParams.get("transactionType");

  let filteredTransactions = mockTransactions;

  console.log({ transactionType });

  if (transactionID.length) {
    filteredTransactions = filteredTransactions.filter((t) =>
      t.id.toLowerCase().includes(transactionID)
    );
  }

  if (status.length) {
    filteredTransactions = filteredTransactions.filter((t) =>
      status.includes(t.status)
    );
  }

  if (transactionType.length) {
    filteredTransactions = filteredTransactions.filter((t) =>
      transactionType.includes(t.type)
    );
  }

  return res(ctx.status(200), ctx.json(filteredTransactions));
};

const mockTransactions = [
  {
    id: "x202399000",
    created_at: "2022-11-09T17:19:18.000Z",
    type: "Bank Transfer Out",
    amount: {
      direction: "-",
      currency: "usd",
      net_amount: "$100.00",
    },
    status: "pending",
  },
  {
    id: "x202398000",
    created_at: "2022-11-05T15:19:18.000Z",
    type: "Payment Received",
    amount: {
      direction: "+",
      currency: "sgd",
      net_amount: "$250.00",
    },
    status: "completed",
  },
  {
    id: "x202396000",
    created_at: "2022-10-28T23:20:18.000Z",
    type: "Payment Received",
    amount: {
      direction: "+",
      currency: "usd",
      net_amount: "$150.00",
    },
    status: "completed",
  },
  {
    id: "x202391000",
    created_at: "2022-10-21T10:12:18.000Z",
    type: "Payment Sent",
    amount: {
      direction: "-",
      currency: "sgd",
      net_amount: "$592.45",
    },
    status: "cancelled",
  },
  {
    id: "x202389000",
    created_at: "2022-10-20T18:45:18.000Z",
    type: "Bank Transfer In",
    amount: {
      direction: "+",
      currency: "sgd",
      net_amount: "$183.90",
    },
    status: "completed",
  },
  {
    id: "x202375000",
    created_at: "2022-10-19T19:40:18.000Z",
    type: "Bank Transfer In",
    amount: {
      direction: "+",
      currency: "sgd",
      net_amount: "$99.90",
    },
    status: "cancelled",
  },
  {
    id: "x202371000",
    created_at: "2022-10-11T15:15:18.000Z",
    type: "Payment Received",
    amount: {
      direction: "+",
      currency: "usd",
      net_amount: "$420.55",
    },
    status: "completed",
  },
  {
    id: "x202369000",
    created_at: "2022-10-05T12:32:18.000Z",
    type: "Bank Transfer Out",
    amount: {
      direction: "-",
      currency: "sgd",
      net_amount: "$123.00",
    },
    status: "completed",
  },
  {
    id: "x202397000",
    created_at: "2022-10-02T18:45:18.000Z",
    type: "Bank Transfer In",
    amount: {
      direction: "+",
      currency: "usd",
      net_amount: "$15.00",
    },
    status: "expired",
  },
  {
    id: "x202367000",
    created_at: "2022-09-18T17:05:18.000Z",
    type: "Bank Transfer In",
    amount: {
      direction: "+",
      currency: "usd",
      net_amount: "$55.00",
    },
    status: "expired",
  },
  {
    id: "x202487000",
    created_at: "2022-09-12T10:12:18.000Z",
    type: "Bank Transfer In",
    amount: {
      direction: "+",
      currency: "sgd",
      net_amount: "$997.00",
    },
    status: "completed",
  },
  {
    id: "x202587000",
    created_at: "2022-09-08T15:53:18.000Z",
    type: "Bank Transfer In",
    amount: {
      direction: "+",
      currency: "usd",
      net_amount: "$880.00",
    },
    status: "completed",
  },
];
