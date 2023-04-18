export const fetchUserData = () => ({
  type: "FETCH_USER_DATA",
  userData: {
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
  },
});
