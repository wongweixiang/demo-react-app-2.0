const userProfile = (
  state = {
    bankAccounts: [],
  },
  action: any
) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      return {
        ...state,
        ...action.userData,
      };
    default:
      return state;
  }
};

export default userProfile;
