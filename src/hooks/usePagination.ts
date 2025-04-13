import { useQuery, useQueryClient } from "@tanstack/react-query";

export const usePagination = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["pagination"],
    initialData: { currentPage: 1, pageSize: 10 },
  });

  const setCurrentPage = (current: number | undefined) => {
    if (!current) return;

    queryClient.setQueryData(
      ["pagination"],
      (prevData: { currentPage: number; pageSize: number }) => {
        return {
          ...prevData,
          currentPage: current,
        };
      }
    );
  };

  return {
    currentPage: data?.currentPage,
    pageSize: data?.pageSize,
    setCurrentPage,
  };
};
