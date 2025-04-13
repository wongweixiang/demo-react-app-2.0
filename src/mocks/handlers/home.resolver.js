export const getWalletsResolver = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        walletId: 1,
        currency: "sgd",
        balance: sessionStorage.getItem("wallet_1_balance"),
      },
      {
        walletId: 2,
        currency: "usd",
        balance: sessionStorage.getItem("wallet_2_balance"),
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
        name: "Tony Stark",
        email: "tony@gmail.com",
      },
      {
        id: 102,
        name: "Steve Rogers",
        email: "steve@avengers.org",
      },
      {
        id: 103,
        name: "Natasha Romanoff",
        email: "natasha@redroom.ussr",
      },
      {
        id: 104,
        name: "Wanda Maximoff",
        email: "wanda@vision.town",
      },
    ])
  );
};

export const postSendResolver = (req, res, ctx) => {
  const { walletId, amount } = req.body;

  const prevBalance = sessionStorage.getItem(`wallet_${walletId}_balance`);
  const newBalance = (prevBalance - amount).toFixed(2);
  sessionStorage.setItem(`wallet_${walletId}_balance`, newBalance.toString());

  return res(
    ctx.status(200),
    ctx.json({
      message: "Transaction successful!",
      details: { walletId, amount: (+amount).toFixed(2) },
    })
  );
};
