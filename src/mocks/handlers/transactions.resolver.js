import { mockTransactions } from "./mockTransactions";

export const getTransactionsResolver = (req, res, ctx) => {
  const page = req.url.searchParams.get("page");
  const limit = req.url.searchParams.get("limit");

  const transactionID = req.url.searchParams.get("transactionID");
  const status = req.url.searchParams.get("status") ?? [];
  const transactionType = req.url.searchParams.get("transactionType") ?? [];

  let filteredTransactions = mockTransactions;

  if (transactionID.length > 0) {
    filteredTransactions = filteredTransactions.filter((t) =>
      t.id.toLowerCase().includes(transactionID)
    );
  }

  if (status.length) {
    filteredTransactions = filteredTransactions.filter((t) =>
      status.includes(t.status)
    );
  }

  if (transactionType.length) {
    filteredTransactions = filteredTransactions.filter((t) =>
      transactionType.includes(t.type)
    );
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const transactionsOnCurrentPage = filteredTransactions.slice(
    startIndex,
    endIndex
  );

  return res(
    ctx.status(200),
    ctx.delay(),
    ctx.json({
      data: transactionsOnCurrentPage,
      pagination: {
        page: page + 1,
        limit: limit,
        total: filteredTransactions.length,
      },
    })
  );
};
