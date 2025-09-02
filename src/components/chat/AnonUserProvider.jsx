import { useMutation } from "convex/react";
import { useEffect, useState } from "react";
import { api } from "../../../convex/_generated/api";
import { AnonUserContext } from "./AnonUserContext";
import { useQueryWithStatus} from "./helper";


const storagekey = "ronbot_anon_user_id";

export const AnonUserProvider = ({ children }) => {
  const [anonUserId, setAnonuserId] = useState(() => localStorage[storagekey]);

  const createAnonymousUser = useMutation(api.users.createAnonymousUser);

  const anonUserQuery = useQueryWithStatus(
    api.users.findUser,
    anonUserId ? { id: anonUserId } : "skip"
  );

  useEffect(() => {
    if (anonUserId) {
      if (anonUserQuery.data) return;
      if (anonUserQuery.status == "pending") return;
      setAnonuserId(null);
      return;
    }

    console.log("inside create useEffect");
    createAnonymousUser()
      .then((id) => {
        localStorage[storagekey] = id;
        setAnonuserId(id);
      })
      .catch(console.error);
  }, [anonUserId, anonUserQuery.status, anonUserQuery.data, createAnonymousUser]);

  return (
    <AnonUserContext.Provider value={anonUserQuery.data}>
      {children}
    </AnonUserContext.Provider>
  );
};
