import { useQuery } from "@tanstack/react-query";
import { fetchWallets } from "../services/fetchWallets";

export const useWallets = () => {
  const { data, refetch, ...otherQueryProps } = useQuery({
    queryKey: ["wallets"],
    queryFn: async () => {
      return await fetchWallets();
    },
  });

  return { wallets: data ?? [], refetch, ...otherQueryProps };
};
