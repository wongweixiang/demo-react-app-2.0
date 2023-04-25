export const getAccountsResolver = (req, res, ctx) => {
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
};

export const getContactsResolver = (req, res, ctx) => {
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
};

export const postSendResolver = (req, res, ctx) => {
  const { wallet_id, amount } = req.body;

  return res(
    ctx.status(200),
    ctx.json({
      message: "Transaction successful",
      details: { wallet_id, amount },
    })
  );
};
