import { Box } from "../../components/box/Box";
import BoredCards from "../../components/card/BoredCards";
import { GetActivities } from "../../hooks/GetActivities";
import { useStoreState } from "../../store/hooks";
import { IActivity } from "../../types";

const Dashboard = () => {
  const { loaded, error } = GetActivities(10);
  const activities = useStoreState((store) => store.activities);

  if (loaded) {
    return <Box>{BoredCards(activities as Array<IActivity>)}</Box>;
  }

  return <span>Loading...</span>;
};

export default Dashboard;
