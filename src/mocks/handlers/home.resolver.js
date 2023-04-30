export const getWalletsResolver = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        wallet_id: 1,
        currency: "sgd",
        balance: sessionStorage.getItem("wallet_1_balance"),
      },
      {
        wallet_id: 2,
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
  const { wallet_id, amount } = req.body;

  const prevBalance = sessionStorage.getItem(`wallet_${wallet_id}_balance`);
  const newBalance = (prevBalance - amount).toFixed(2);
  sessionStorage.setItem(`wallet_${wallet_id}_balance`, newBalance.toString());

  return res(
    ctx.status(200),
    ctx.json({
      message: "Transaction successful!",
      details: { wallet_id, amount: (+amount).toFixed(2) },
    })
  );
};
