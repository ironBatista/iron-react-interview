import axios from "axios";
import { useEffect, useState } from "react";
import { environment } from "../environments/environment";

export const GetActivities = (times: number) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  let storedActivities = localStorage.getItem("activities");

  if (!storedActivities) {
    localStorage.setItem("activities", JSON.stringify([]));
  }

  useEffect(() => {
    localStorage.clear();
    for (let index = 0; index < times; index++) {
      axios
        .get(`${environment.API.url}/activity`)
        .then((response) => {
          const activities: Array<Object> = JSON.parse(
            localStorage.getItem("activities") || "[]"
          );
          activities.push(response.data);
          localStorage.setItem("activities", JSON.stringify(activities));
          setData(activities);
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
  }, []);
  return { data, error, loaded };
};
