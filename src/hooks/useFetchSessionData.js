import { useEffect } from "react";
import authService from "../appwrite/auth";
import useUserDataContext from "../contexts/userDataContext";

function useFetchSessionData() {
  const { userData, updateSessionCookie } = useUserDataContext();

  useEffect(() => {
    async function fetchSessionData() {
      try {
        const res = await authService.getCurrentUser();
        if (res.err) {
          updateSessionCookie("");
        } else {
          updateSessionCookie(res);
        }
      } catch (error) {
        console.log("error fetching the session :: ", error);
        updateSessionCookie("");
      }
    }

    fetchSessionData();
  }, [userData]);
}

export default useFetchSessionData;
