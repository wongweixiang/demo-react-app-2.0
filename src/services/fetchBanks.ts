import API from "./API";

type Bank = {
  value: string;
  label: string;
};

type FetchBanksResponse = Array<Bank>;

export const fetchBanks = async (): Promise<FetchBanksResponse> => {
  return await API.get("/banks");
};
