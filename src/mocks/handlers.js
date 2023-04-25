import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/accounts`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          account_id: 1,
          currency: "sgd",
          balance: "830.00",
        },
        {
          account_id: 2,
          currency: "usd",
          balance: "750.00",
        },
      ])
    );
  }),

  rest.get(`${process.env.REACT_APP_API_URL}/contacts`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 101,
          name: "Tony",
          email: "tony_stark@gmail.com",
        },
        {
          id: 102,
          name: "Steve",
          email: "steve.rogers@avengers.org",
        },
        {
          id: 103,
          name: "Natasha",
          email: "natasha.romanoff@redroom.ussr",
        },
        {
          id: 104,
          name: "Wanda",
          email: "wanda_maximoff@vision.town",
        },
      ])
    );
  }),

  rest.post(`${process.env.REACT_APP_API_URL}/send`, (req, res, ctx) => {
    const { wallet_id, amount } = req.body;

    return res(
      ctx.status(200),
      ctx.json({
        message: "Transaction successful",
        details: { wallet_id, amount },
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

  rest.get(`${process.env.REACT_APP_API_URL}/user_profile`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        full_name: "Test User One",
        email: "test_user@gmail.com",
        phone_no: "811911112",
        profile_img_url: "https://picsum.photos/id/203/300",
        bank_accounts: [
          {
            id: 99,
            account_no: "0122368991",
            bank_abbrev: "DBS",
            verification_status: "verified",
          },
          {
            id: 98,
            account_no: "0744368552",
            bank_abbrev: "UOB",
            verification_status: "pending",
          },
        ],
      })
    );
  }),

  rest.get(`${process.env.REACT_APP_API_URL}/banks`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { value: "DBS", label: "DBS Bank" },
        { value: "POSB", label: "POSB Bank" },
        { value: "OCBC", label: "OCBC Bank" },
        { value: "UOB", label: "United Overseas Bank" },
        { value: "SC", label: "Standard Chartered Bank" },
        { value: "HSBC", label: "HSBC Bank" },
      ])
    );
  }),

  rest.post(
    `${process.env.REACT_APP_API_URL}/bank_account`,
    (req, res, ctx) => {
      const { account_no, bank_abbrev } = req.body;

      return res(
        ctx.status(200),
        ctx.json({
          message: "Successfully added account",
          account: {
            id: Math.floor(Math.random() * 1000), // return random integer from 0 to 999
            account_no,
            bank_abbrev,
            verification_status: "pending",
          },
        })
      );
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}/bank_account/:id`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "Successfully deleted account",
          id: +req.params.id,
        })
      );
    }
  ),
];

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
    id: "x202387000",
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
    id: "x202387000",
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
    id: "x202387000",
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
    id: "x202387000",
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
    id: "x202387000",
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
