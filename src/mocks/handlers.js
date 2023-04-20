import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ test: "hi" }]));
  }),

  rest.get(`${process.env.REACT_APP_API_URL}/user_profile`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        fullName: "Test User One",
        email: "test_user@gmail.com",
        phoneNo: "811911112",
        profileImgUrl: "https://picsum.photos/id/203/300",
        bankAccounts: [
          {
            accountNo: "0122368991",
            bankAbbrev: "DBS",
            verificationStatus: "verified",
          },
          {
            accountNo: "0744368552",
            bankAbbrev: "UOB",
            verificationStatus: "pending",
          },
        ],
      })
    );
  }),

  rest.get(`${process.env.REACT_APP_API_URL}/transactions`, (req, res, ctx) => {
    const transactionID = req.url.searchParams.get("transactionID");
    const status = req.url.searchParams.get("status");
    const transactionType = req.url.searchParams.get("transactionType");

    let filteredTransactions = mockTransactions;

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
  }),
];

const mockTransactions = [
  {
    id: "x202399000",
    createdAt: "2022-11-09T17:19:18.000Z",
    type: "Bank Transfer Out",
    amount: {
      direction: "-",
      currency: "usd",
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
      currency: "sgd",
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
      currency: "usd",
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
      currency: "sgd",
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
      currency: "sgd",
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
      currency: "sgd",
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
      currency: "usd",
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
      currency: "sgd",
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
      currency: "usd",
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
      currency: "usd",
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
      currency: "sgd",
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
      currency: "usd",
      netAmount: "$880.00",
    },
    status: "completed",
  },
];
