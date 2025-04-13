import API from "./API";

type Contact = {
  id: number;
  email: string;
  name: string;
};

type FetchContactsResponse = Array<Contact>;

export const fetchContacts = async (): Promise<FetchContactsResponse> => {
  return await API.get(`/contacts`);
};
