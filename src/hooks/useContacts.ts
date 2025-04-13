import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "../services/fetchContacts";

export const useContacts = () => {
  const { data, refetch, ...otherQueryProps } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      return await fetchContacts();
    },
  });

  return { contacts: data ?? [], refetch, ...otherQueryProps };
};
