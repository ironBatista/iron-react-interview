import axios from "axios";
import { useEffect, useState } from "react";
import { environment } from "../environments/environment";
import { useStoreActions } from "../store/hooks";

export const GetActivities = (times: number) => {
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { addActivity } = useStoreActions((store) => store);

  useEffect(() => {
    for (let index = 0; index < times; index++) {
      axios
        .get(`${environment.API.url}/activity`)
        .then((response) => {
          addActivity(response.data);
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);

  return { error, loaded };
};
