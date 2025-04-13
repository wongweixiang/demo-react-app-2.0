import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useModalState = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({ queryKey: ["modalState"], initialData: false });

  const handleModalOpening = () => {
    queryClient.setQueryData(["modalState"], true);
  };

  const handleModalClosing = () => {
    queryClient.setQueryData(["modalState"], false);
  };

  return {
    isModalOpen: data,
    handleModalOpening,
    handleModalClosing,
  };
};
