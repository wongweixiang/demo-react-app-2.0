export const getUserProfileResolver = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      fullName: "WX",
      email: "test_user@gmail.com",
      phoneNo: "811911112",
      profileImgUrl: "https://picsum.photos/id/203/300",
      bankAccounts: [
        {
          id: 99,
          accountNo: "0122368991",
          bankAbbrev: "DBS",
          verificationStatus: "verified",
        },
        {
          id: 98,
          accountNo: "0744368552",
          bankAbbrev: "UOB",
          verificationStatus: "pending",
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
  const { accountNo, bankAbbrev } = req.body;

  return res(
    ctx.status(200),
    ctx.json({
      message: "Successfully added account",
      account: {
        id: Math.floor(Math.random() * 1000), // return random integer from 0 to 999
        accountNo,
        bankAbbrev,
        verificationStatus: "pending",
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
