import { rest } from "msw";
import {
  getWalletsResolver,
  getContactsResolver,
  postSendResolver,
} from "./home.resolver";
import { getTransactionsResolver } from "./transactions.resolver";
import {
  getUserProfileResolver,
  getBanksResolver,
  postBankAccountResolver,
  deleteBankAccountResolver,
} from "./userProfile.resolver";

const baseUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.get(`${baseUrl}/wallets`, getWalletsResolver),
  rest.get(`${baseUrl}/contacts`, getContactsResolver),
  rest.post(`${baseUrl}/send`, postSendResolver),

  rest.get(`${baseUrl}/transactions`, getTransactionsResolver),

  rest.get(`${baseUrl}/user_profile`, getUserProfileResolver),
  rest.get(`${baseUrl}/banks`, getBanksResolver),
  rest.post(`${baseUrl}/bank_account`, postBankAccountResolver),
  rest.delete(`${baseUrl}/bank_account/:id`, deleteBankAccountResolver),
];
