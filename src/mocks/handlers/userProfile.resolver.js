export const getUserProfileResolver = (req, res, ctx) => {
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
};

export const getBanksResolver = (req, res, ctx) => {
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
};

export const postBankAccountResolver = (req, res, ctx) => {
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
};

export const deleteBankAccountResolver = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      message: "Successfully deleted account",
      id: +req.params.id,
    })
  );
};
