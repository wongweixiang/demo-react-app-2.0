import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../services/fetchUserProfile";

export const useUserProfile = () => {
  const { data, ...otherQueryProps } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      return await fetchUserProfile();
    },
    initialData: {
      fullName: "",
      email: "",
      phoneNo: "",
      profileImgUrl: "",
      bankAccounts: [],
    },
  });

  return { ...data, ...otherQueryProps };
};
